function getObjectPropertyValueByKey(obj, key) {
  const map = new Map(Object.entries(obj));
  if (obj.hasOwnProperty(key) && map) {
    return map.get(key);
  }
  return undefined;
}

/**
 * Generates unique ID for given prefix.
 * @param {string} prefix Prefix for generated ID
 * @returns {string}
 */
function getUniqueIdWithPrefix(prefix) {
  const result = Math.floor(Math.random() * new Date().getTime()).toString();
  if (!prefix) {
    return result;
  }

  return `${prefix}${result}`;
}

/* eslint-disable no-useless-escape */
function stringSnakeToCamel(str) {
  return str.replace(/(\-\w)/g, function (m) {
    return m[1].toUpperCase();
  });
}

function toJSON(value) {
  if (typeof value !== 'string') {
    return value;
  }

  if (!value) {
    return undefined;
  }

  // ("'" => "\"");
  const result = value
    .toString()
    .split('')
    .map((el) => (el !== "'" ? el : '"'))
    .join('');
  const jsonStr = result.replace(/(\w+:)|(\w+ :)/g, function (matched) {
    return '"' + matched.substring(0, matched.length - 1) + '":';
  });
  
  try {
    return JSON.parse(jsonStr);
  } catch {
    return undefined;
  }
}

export { getObjectPropertyValueByKey, getUniqueIdWithPrefix, stringSnakeToCamel, toJSON };
