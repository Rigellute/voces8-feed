!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e,n,t,_,l={},o=[],r=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function i(e,n){for(var t in n)e[t]=n[t];return e}function u(e){var n=e.parentNode;n&&n.removeChild(e)}function c(e,n,t){var _,l,o,r=arguments,i={};for(o in n)"key"==o?_=n[o]:"ref"==o?l=n[o]:i[o]=n[o];if(arguments.length>3)for(t=[t],o=3;o<arguments.length;o++)t.push(r[o]);if(null!=t&&(i.children=t),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===i[o]&&(i[o]=e.defaultProps[o]);return f(e,i,_,l,null)}function f(n,t,_,l,o){var r={type:n,props:t,key:_,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++e.__v:o};return null!=e.vnode&&e.vnode(r),r}function s(e){return e.children}function a(e,n){this.props=e,this.context=n}function p(e,n){if(null==n)return e.__?p(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?p(e):null}function h(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return h(e)}}function d(l){(!l.__d&&(l.__d=!0)&&n.push(l)&&!v.__r++||_!==e.debounceRendering)&&((_=e.debounceRendering)||t)(v)}function v(){for(var e;v.__r=n.length;)e=n.sort((function(e,n){return e.__v.__b-n.__v.__b})),n=[],e.some((function(e){var n,t,_,l,o,r;e.__d&&(o=(l=(n=e).__v).__e,(r=n.__P)&&(t=[],(_=i({},l)).__v=l.__v+1,x(r,l,_,n.__n,void 0!==r.ownerSVGElement,null!=l.__h?[o]:null,t,null==o?p(l):o,l.__h),C(t,l),l.__e!=o&&h(l)))}))}function y(e,n,t,_,r,i,u,c,a,h){var d,v,y,k,b,S,w,C=_&&_.__k||o,D=C.length;for(t.__k=[],d=0;d<n.length;d++)if(null!=(k=t.__k[d]=null==(k=n[d])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k?f(null,k,null,null,k):Array.isArray(k)?f(s,{children:k},null,null,null):k.__b>0?f(k.type,k.props,k.key,null,k.__v):k)){if(k.__=t,k.__b=t.__b+1,null===(y=C[d])||y&&k.key==y.key&&k.type===y.type)C[d]=void 0;else for(v=0;v<D;v++){if((y=C[v])&&k.key==y.key&&k.type===y.type){C[v]=void 0;break}y=null}x(e,k,y=y||l,r,i,u,c,a,h),b=k.__e,(v=k.ref)&&y.ref!=v&&(w||(w=[]),y.ref&&w.push(y.ref,null,k),w.push(v,k.__c||b,k)),null!=b?(null==S&&(S=b),"function"==typeof k.type&&null!=k.__k&&k.__k===y.__k?k.__d=a=m(k,a,e):a=g(e,k,y,C,b,a),h||"option"!==t.type?"function"==typeof t.type&&(t.__d=a):e.value=""):a&&y.__e==a&&a.parentNode!=e&&(a=p(y))}for(t.__e=S,d=D;d--;)null!=C[d]&&("function"==typeof t.type&&null!=C[d].__e&&C[d].__e==t.__d&&(t.__d=p(_,d+1)),H(C[d],C[d]));if(w)for(d=0;d<w.length;d++)E(w[d],w[++d],w[++d])}function m(e,n,t){var _,l;for(_=0;_<e.__k.length;_++)(l=e.__k[_])&&(l.__=e,n="function"==typeof l.type?m(l,n,t):g(t,l,l,e.__k,l.__e,n));return n}function g(e,n,t,_,l,o){var r,i,u;if(void 0!==n.__d)r=n.__d,n.__d=void 0;else if(null==t||l!=o||null==l.parentNode)e:if(null==o||o.parentNode!==e)e.appendChild(l),r=null;else{for(i=o,u=0;(i=i.nextSibling)&&u<_.length;u+=2)if(i==l)break e;e.insertBefore(l,o),r=o}return void 0!==r?r:l.nextSibling}function k(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||r.test(n)?t:t+"px"}function b(e,n,t,_,l){var o;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(n in _)t&&n in t||k(e.style,n,"");if(t)for(n in t)_&&t[n]===_[n]||k(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])o=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+o]=t,t?_||e.addEventListener(n,o?w:S,o):e.removeEventListener(n,o?w:S,o);else if("dangerouslySetInnerHTML"!==n){if(l)n=n.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(r){}"function"==typeof t||(null!=t&&(!1!==t||"a"===n[0]&&"r"===n[1])?e.setAttribute(n,t):e.removeAttribute(n))}}function S(n){this.l[n.type+!1](e.event?e.event(n):n)}function w(n){this.l[n.type+!0](e.event?e.event(n):n)}function x(n,t,_,r,c,f,p,h,d){var v,m,g,k,S,w,x,C,E,H,T,P=t.type;if(void 0!==t.constructor)return null;null!=_.__h&&(d=_.__h,h=t.__e=_.__e,t.__h=null,f=[h]),(v=e.__b)&&v(t);try{e:if("function"==typeof P){if(C=t.props,E=(v=P.contextType)&&r[v.__c],H=v?E?E.props.value:v.__:r,_.__c?x=(m=t.__c=_.__c).__=m.__E:("prototype"in P&&P.prototype.render?t.__c=m=new P(C,H):(t.__c=m=new a(C,H),m.constructor=P,m.render=D),E&&E.sub(m),m.props=C,m.state||(m.state={}),m.context=H,m.__n=r,g=m.__d=!0,m.__h=[]),null==m.__s&&(m.__s=m.state),null!=P.getDerivedStateFromProps&&(m.__s==m.state&&(m.__s=i({},m.__s)),i(m.__s,P.getDerivedStateFromProps(C,m.__s))),k=m.props,S=m.state,g)null==P.getDerivedStateFromProps&&null!=m.componentWillMount&&m.componentWillMount(),null!=m.componentDidMount&&m.__h.push(m.componentDidMount);else{if(null==P.getDerivedStateFromProps&&C!==k&&null!=m.componentWillReceiveProps&&m.componentWillReceiveProps(C,H),!m.__e&&null!=m.shouldComponentUpdate&&!1===m.shouldComponentUpdate(C,m.__s,H)||t.__v===_.__v){m.props=C,m.state=m.__s,t.__v!==_.__v&&(m.__d=!1),m.__v=t,t.__e=_.__e,t.__k=_.__k,m.__h.length&&p.push(m);break e}null!=m.componentWillUpdate&&m.componentWillUpdate(C,m.__s,H),null!=m.componentDidUpdate&&m.__h.push((function(){m.componentDidUpdate(k,S,w)}))}m.context=H,m.props=C,m.state=m.__s,(v=e.__r)&&v(t),m.__d=!1,m.__v=t,m.__P=n,v=m.render(m.props,m.state,m.context),m.state=m.__s,null!=m.getChildContext&&(r=i(i({},r),m.getChildContext())),g||null==m.getSnapshotBeforeUpdate||(w=m.getSnapshotBeforeUpdate(k,S)),T=null!=v&&v.type===s&&null==v.key?v.props.children:v,y(n,Array.isArray(T)?T:[T],t,_,r,c,f,p,h,d),m.base=t.__e,t.__h=null,m.__h.length&&p.push(m),x&&(m.__E=m.__=null),m.__e=!1}else null==f&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=function(e,n,t,_,r,i,c,f){var s,a,p,h,d=t.props,v=n.props,m=n.type,g=0;if("svg"===m&&(r=!0),null!=i)for(;g<i.length;g++)if((s=i[g])&&(s===e||(m?s.localName==m:3==s.nodeType))){e=s,i[g]=null;break}if(null==e){if(null===m)return document.createTextNode(v);e=r?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,v.is&&v),i=null,f=!1}if(null===m)d===v||f&&e.data===v||(e.data=v);else{if(i=i&&o.slice.call(e.childNodes),a=(d=t.props||l).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!f){if(null!=i)for(d={},h=0;h<e.attributes.length;h++)d[e.attributes[h].name]=e.attributes[h].value;(p||a)&&(p&&(a&&p.__html==a.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(function(e,n,t,_,l){var o;for(o in t)"children"===o||"key"===o||o in n||b(e,o,null,t[o],_);for(o in n)l&&"function"!=typeof n[o]||"children"===o||"key"===o||"value"===o||"checked"===o||t[o]===n[o]||b(e,o,n[o],t[o],_)}(e,v,d,r,f),p)n.__k=[];else if(g=n.props.children,y(e,Array.isArray(g)?g:[g],n,t,_,r&&"foreignObject"!==m,i,c,e.firstChild,f),null!=i)for(g=i.length;g--;)null!=i[g]&&u(i[g]);f||("value"in v&&void 0!==(g=v.value)&&(g!==e.value||"progress"===m&&!g)&&b(e,"value",g,d.value,!1),"checked"in v&&void 0!==(g=v.checked)&&g!==e.checked&&b(e,"checked",g,d.checked,!1))}return e}(_.__e,t,_,r,c,f,p,d);(v=e.diffed)&&v(t)}catch(L){t.__v=null,(d||null!=f)&&(t.__e=h,t.__h=!!d,f[f.indexOf(h)]=null),e.__e(L,t,_)}}function C(n,t){e.__c&&e.__c(t,n),n.some((function(t){try{n=t.__h,t.__h=[],n.some((function(e){e.call(t)}))}catch(_){e.__e(_,t.__v)}}))}function E(n,t,_){try{"function"==typeof n?n(t):n.current=t}catch(l){e.__e(l,_)}}function H(n,t,_){var l,o,r;if(e.unmount&&e.unmount(n),(l=n.ref)&&(l.current&&l.current!==n.__e||E(l,null,t)),_||"function"==typeof n.type||(_=null!=(o=n.__e)),n.__e=n.__d=void 0,null!=(l=n.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(i){e.__e(i,t)}l.base=l.__P=null}if(l=n.__k)for(r=0;r<l.length;r++)l[r]&&H(l[r],t,_);null!=o&&u(o)}function D(e,n,t){return this.constructor(e,t)}e={__e:function(e,n){for(var t,_,l;n=n.__;)if((t=n.__c)&&!t.__)try{if((_=t.constructor)&&null!=_.getDerivedStateFromError&&(t.setState(_.getDerivedStateFromError(e)),l=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(e),l=t.__d),l)return t.__E=t}catch(o){e=o}throw e},__v:0},a.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=i({},this.state),"function"==typeof e&&(e=e(i({},t),this.props)),e&&i(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),d(this))},a.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),d(this))},a.prototype.render=s,n=[],t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,v.__r=0;var T,P,L,A=0,F=[],N=e.__b,U=e.__r,M=e.diffed,W=e.__c,$=e.unmount;function B(n,t){e.__h&&e.__h(P,n,A||t),A=0;var _=P.__H||(P.__H={__:[],__h:[]});return n>=_.__.length&&_.__.push({}),_.__[n]}function R(e){return A=1,function(e,n,t){var _=B(T++,2);return _.t=e,_.__c||(_.__=[t?t(n):V(void 0,n),function(e){var n=_.t(_.__[0],e);_.__[0]!==n&&(_.__=[n,_.__[1]],_.__c.setState({}))}],_.__c=P),_.__}(V,e)}function q(){F.forEach((function(n){if(n.__P)try{n.__H.__h.forEach(I),n.__H.__h.forEach(j),n.__H.__h=[]}catch(J){n.__H.__h=[],e.__e(J,n.__v)}})),F=[]}e.__b=function(e){P=null,N&&N(e)},e.__r=function(e){U&&U(e),T=0;var n=(P=e.__c).__H;n&&(n.__h.forEach(I),n.__h.forEach(j),n.__h=[])},e.diffed=function(n){M&&M(n);var t=n.__c;t&&t.__H&&t.__H.__h.length&&(1!==F.push(t)&&L===e.requestAnimationFrame||((L=e.requestAnimationFrame)||function(e){var n,t=function(){clearTimeout(_),O&&cancelAnimationFrame(n),setTimeout(e)},_=setTimeout(t,100);O&&(n=requestAnimationFrame(t))})(q)),P=void 0},e.__c=function(n,t){t.some((function(n){try{n.__h.forEach(I),n.__h=n.__h.filter((function(e){return!e.__||j(e)}))}catch(X){t.some((function(e){e.__h&&(e.__h=[])})),t=[],e.__e(X,n.__v)}})),W&&W(n,t)},e.unmount=function(n){$&&$(n);var t=n.__c;if(t&&t.__H)try{t.__H.__.forEach(I)}catch(_){e.__e(_,t.__v)}};var O="function"==typeof requestAnimationFrame;function I(e){var n=P;"function"==typeof e.__c&&e.__c(),P=n}function j(e){var n=P;e.__c=e.__(),P=n}function V(e,n){return"function"==typeof n?n(e):n}const z=e=>{const n=new Date(e);return`${n.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})} ${n.getFullYear()}`};function G(){const[n,t]=R(!1),[_,l]=R([]),[o,r]=R("");var i,u,f,a,p;return i=()=>{t(!0),fetch("https://hthsy35yo6.execute-api.eu-west-1.amazonaws.com/prod/feeds/8bc28381/20134028/12/performances.json").then((e=>e.json())).then((e=>{l(e),t(!1)})).catch((e=>{console.log("ERROR",e),r("Oops, something went wrong"),t(!1)}))},u=[],p=B(T++,3),!e.__s&&(f=p.__H,a=u,!f||f.length!==a.length||a.some((function(e,n){return e!==f[n]})))&&(p.__=i,p.__H=u,P.__H.__h.push(p)),c(s,null,n&&c("p",null,"Loading..."),o&&c("p",null,o),_.map((e=>{return c(s,null,c("h2",null,c("strong",null,e.eventName),e.eventSubtitle),c("strong",null,z(e.date),e.endDate&&e.endDate!==e.date?` - ${z(e.endDate)}`:null),c("div",null,c("div",null,"Start time: ",e.time||"TBC"),c("div",null,"Venue: ",e.venue||"TBC"," ",e.lat&&e.lng?c("a",{style:{color:"#007f80",textDecoration:"underline"},target:"blank",href:`https://maps.google.com/?q=${e.lat},${e.lng}`},"Maps"):null),c("div",null,"Tickets:"," ",e.ticketLink&&"string"==typeof e.ticketLink?c("a",{target:"blank",href:(n=e.ticketLink,n.match(/^http?:\/\//i)&&n.match(/^https?:\/\//i)?n:"http://"+n),style:{color:"#007f80",textDecoration:"underline"}},"Click here"):"TBC")),c("hr",{style:{color:"rgba(204,204,204,.63)"}}));var n})))}var Y,J,K,Q,X,Z;Y=c(G,null),J=document.getElementById("voces8-feed"),e.__&&e.__(Y,J),X=(Q="function"==typeof K)?null:K&&K.__k||J.__k,Z=[],x(J,Y=(!Q&&K||J).__k=c(s,null,[Y]),X||l,l,void 0!==J.ownerSVGElement,!Q&&K?[K]:X?null:J.firstChild?o.slice.call(J.childNodes):null,Z,!Q&&K?K:X?X.__e:J.firstChild,Q),C(Z,Y)}));
