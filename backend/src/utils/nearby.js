const calDistance = (lat1, lon1, lat2, lon2) => {
  lon1 = (lon1 * Math.PI) / 180;
  lon2 = (lon2 * Math.PI) / 180;
  lat1 = (lat1 * Math.PI) / 180;
  lat2 = (lat2 * Math.PI) / 180;

  let dlon = lon2 - lon1;
  let dlat = lat2 - lat1;
  let a =
    Math.pow(Math.sin(dlat / 2), 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

  let c = 2 * Math.asin(Math.sqrt(a));

  let r = 6371;

  return c * r;
};

const getLocation = (user) => {
  if (!user["location"]) return "";
  const lat = user["location"].lat;
  const long = user["location"].long;
  return [lat, long];
};

const nearby = (obj, user) => {
  const [currentlat, currentlong] = getLocation(user);
  let userlist = [];
  for (let i = 0; i < obj.length; i++) {
    const [lat, long] = getLocation(obj[i]);
    let distance = calDistance(currentlat, currentlong, lat, long);
    let us = { user: obj[i] };
    us["distance"] = distance;
    userlist.push(us);
  }
  userlist.sort((s1, s2) => {
    return s1.distance - s2.distance;
  });
  return userlist;
};

export default nearby;
