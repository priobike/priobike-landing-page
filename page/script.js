function isIOS() {
  return navigator.userAgent.indexOf("like Mac") != -1;
}

function isSafari() {
  return navigator.userAgent.indexOf("Safari") != -1;
}

if (isIOS()) {
  if (!isSafari()) {
    alert(
      "Um den Link in der PrioBike öffnen zu können, muss der Link in Safari geöffnet werden."
    );
  }
}
