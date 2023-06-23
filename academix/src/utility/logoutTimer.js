import moment from "moment";

const LocalSessionTracker = () => {
  const time = moment().format();
  localStorage.setItem("expiresIn", moment(time).add(1, "hours"));
};

const timer = () => {
  const localTrackTime = localStorage.getItem("expiresIn");

  if (moment().hours() > moment(localTrackTime).hours()) {
    localStorage.clear("token");
    localStorage.clear("expiresIn");
    localStorage.clear("user");
  }
  return false;
};

export { LocalSessionTracker, timer };
