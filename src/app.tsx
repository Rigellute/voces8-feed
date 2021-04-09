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

const createLink = (url: string) => {
  if (!url.match(/^http?:\/\//i) || !url.match(/^https?:\/\//i)) {
    return "http://" + url;
  }
  return url;
};

// overture does not support cross origin requests, so need to setup a proxy
// const originalUrl =
// "https://feeds.overturehq.com/feeds/8bc28381/20134028/12/performances.json";
const proxyUrl =
  "https://hthsy35yo6.execute-api.eu-west-1.amazonaws.com/prod/feeds/8bc28381/20134028/12/performances.json";

const formatDate = (dateStr: Date) => {
  const date = new Date(dateStr);
  const localeString = date.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const dateWithYear = `${localeString} ${date.getFullYear()}`;
  return dateWithYear;
};

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
          <h2>
            <strong>{performance.eventName}</strong>
            {performance.eventSubtitle}
          </h2>
          <strong>
            {formatDate(performance.date)}
            {performance.endDate && performance.endDate !== performance.date
              ? ` - ${formatDate(performance.endDate)}`
              : null}
          </strong>
          <div>
            Start time: {performance.time || "TBC"} Venue:{" "}
            {performance.venue || "TBC"}{" "}
            {performance.lat && performance.lng ? (
              <a
                style={{ color: "#007f80", textDecoration: "underline" }}
                target="blank"
                href={`https://maps.google.com/?q=${performance.lat},${performance.lng}`}
              >
                Maps
              </a>
            ) : null}{" "}
            Tickets:{" "}
            {performance.ticketLink &&
            typeof performance.ticketLink === "string" ? (
              <a
                target="blank"
                href={createLink(performance.ticketLink)}
                style={{ color: "#007f80", textDecoration: "underline" }}
              >
                Click here
              </a>
            ) : (
              "TBC"
            )}
          </div>

          <hr style={{ color: "rgba(204,204,204,.63)" }} />
        </>
      ))}
    </>
  );
}
