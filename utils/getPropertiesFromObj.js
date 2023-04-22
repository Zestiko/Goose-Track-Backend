/**
 * Extracts specified properties from an object and returns them as a new object.
 * @param {Array} properties - An array of property names to extract from the object.
 * @param {Object} obj - The object to extract properties from.
 * @returns {Object} - A new object containing only the specified properties and their values, if they exist in the original object.
 */
const getPropertiesFromObj = (properties, obj) => {
  return properties.reduce((resObj, prop) => {
    if (obj.hasOwnProperty(prop)) {
      resObj[prop] = obj[prop];
    }
    return resObj;
  }, {});
};

module.exports = getPropertiesFromObj;
