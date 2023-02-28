const get = (obj, path, defaultValue = undefined) => {
  const result = String.prototype.split.call(path, /[,[\].]+?/)
    .filter(Boolean)
    .reduce((acc, i) => {
      if (acc !== null && acc != undefined) {
        if (Array.isArray(acc) && acc.length > 1 && !isNaN(Number(i))) {

        } else if (Array.isArray(acc) && acc.length > 0) {
          return acc[0][i];
        } else {
          return acc[i];
        }
      } else {
        return acc;
      }

    }, obj)
  return result === undefined || result === obj ? defaultValue : result;
};

module.exports = { get };