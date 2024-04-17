var isIOS = navigator.userAgent.indexOf("like Mac") != -1;

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
