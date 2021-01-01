export function getCookie(cname: string): string {
  if (process.browser) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}

export function getTime(time: string): string {
  const now = Date.now();
  const comparedTime = Date.parse(time);
  const difference = Math.abs(comparedTime - now);

  if (difference <= 60000) {
    return `${Math.round(difference / 1000).toString()} secs ago`;
  } else if (difference < 3600000) {
    return `${Math.round(difference / 60000).toString()} mins ago`;
  } else if (difference < 86400000) {
    return `${Math.round(difference / 3600000).toString()} hrs ago`;
  } else if (difference < 2678400000) {
    return `${Math.round(difference / 86400000).toString()} days ago`;
  } else if (difference < 31557600000) {
    return `${Math.round(difference / 2629800000).toString()} months ago`;
  } else if (difference >= 31557600000) {
    return `${Math.round(difference / 31557600000).toString()} yrs ago`;
  }
}
