// makeQuery :: Object => String
function makeQuery(obj) {
  let result = '?';

  for (const key in obj) {
    const str = obj[key] && obj[key].replace(/\s/g, '+'); // empty space between city names should be replaced by +
    if (str) {
      result += `${key}=${str}&`;
    }
  }
  return result.slice(0, -1);
}

module.exports = {
  makeQuery,
};
