import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";

export interface Performance {
  id: string;
  date: Date;
  time: string;
  endDate: Date;
  eventName: string;
  eventSubtitle: boolean;
  bookingName: string;
  promoterID: string;
  promoter: string;
  promoterWebsite: string;
  venueID: string;
  venue: string;
  state: null;
  country: null;
  lat: null;
  lng: null;
  orchestra: string;
  ticketLink: boolean | string;
  artistID: string;
  artist: string;
  otherArtists: boolean;
  programmeTitle: string;
  programme: Programme[];
}

export interface Programme {
  composer: string;
  work: string;
  role: string;
}

// overture does not support cross origin requests, so need to setup a proxy
// const originalUrl =
// "https://feeds.overturehq.com/feeds/8bc28381/20134028/12/performances.json";

const proxyUrl =
  "https://hthsy35yo6.execute-api.eu-west-1.amazonaws.com/prod/feeds/8bc28381/20134028/12/performances.json";

const formatDate = (date: Date) =>
  new Date(date).toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

export function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [performances, setPerformances] = useState<Performance[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(proxyUrl)
      .then((res) => res.json())
      .then((performances: Performance[]) => {
        setPerformances(performances);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log("ERROR", e);
        setError("Oops, something went wrong");
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {performances.map((performance) => (
        <>
          <h3>
            {formatDate(performance.date)}
            {performance.endDate && performance.endDate !== performance.date
              ? ` - ${formatDate(performance.endDate)}`
              : null}
          </h3>
          <h1>
            <strong>{performance.eventName}</strong>
            {performance.eventSubtitle}
          </h1>
          <p>Start time: {performance.time || "TBC"}</p>
          <p>Venue: {performance.venue || "TBC"}</p>
          {performance.ticketLink &&
            typeof performance.ticketLink === "string" && (
              <p>
                Ticket Link: <a href={performance.ticketLink}>Click here</a>
              </p>
            )}
        </>
      ))}
    </>
  );
}
