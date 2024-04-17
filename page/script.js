var isIOS = navigator.userAgent.indexOf("like Mac") != -1;

// As of now it is not possible to detect with certainty if the browser is Safari on iOS.
// There are only some checks to detect other browsers.
// In the future it would be good to check if the browser is Safari on iOS.
var isFirefox = navigator.userAgent.indexOf("FxiOS") != -1;
var isChrome = navigator.userAgent.indexOf("CriOS") != -1;
var isEdge = navigator.userAgent.indexOf("EdgiOS") != -1;
var isOpera = navigator.userAgent.indexOf("OPT") != -1;

if (isIOS) {
  if (isFirefox || isChrome || isEdge || isOpera) {
    alert(
      "Um den Link in der PrioBike öffnen zu können, muss der Link auf Deinem iPhone mit Safari geöffnet werden."
    );
  }
}
