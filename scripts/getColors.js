const { getTheme } = require('@contasimples/simples-tokens');

const { palette } = getTheme({
  palette: 'default',
  environment: 'app',
});

const createKey = (key1, key2) => key1 + '.' + key2;

function reduceInternalAttrib(value, key) {
  return Object.entries(value).reduce((prev, [itemKey, itemValue]) => {
    if (typeof itemValue === 'string') {
      return {
        ...prev,
        [createKey(key, itemKey)]: itemValue,
      };
    }
    return {
      ...prev,
      ...reduceInternalAttrib(itemValue, createKey(key, itemKey)),
    };
  }, {});
}

const themeColors = Object.entries(palette).reduce(
  (current, [key, value]) => ({
    ...current,
    ...reduceInternalAttrib(value, key),
  }),
  {}
);

console.log(themeColors);
