const palette = {
  primary: {
    main: '#153D3B',
    light: '#446462',
  },
  secondary: {
    main: '#65CA74',
    light: '#E0F4E3',
  },
  tertiary: {
    main: '#AFE150',
    light: '#EFF9DC',
  },
  neutral: {
    darker: '#0D0D0D',
    dark: '#999999',
    medium: '#E5E5E5',
    light: '#F3F3F3',
    lighter: '#FFFFFF',
  },
  support: {
    dark: {
      blue: '#347FC4',
      green: '#AFE150',
      purple: '#7D6B91',
      orange: '#EE964B',
      turquoise: '#4ECDC4',
      pink: '#FF5B83',
      grey: '#67809F',
    },
    light: {
      blue: '#D6E5F3',
      green: '#EFF9DC',
      purple: '#E5E1E9',
      orange: '#FCEADB',
      turquoise: '#EEFAFA',
      pink: '#FFEFF3',
      grey: '#F0F3F6',
    },
  },
  feedback: {
    error: {
      main: '#7A2D25',
      medium: '#E74C3C',
      light: '#FADBD8',
    },
    alert: {
      main: '#7F680D',
      medium: '#F1C40D',
      light: '#FCF3CF',
    },
    positive: {
      main: '#396B40',
      medium: '#65CA74',
      light: '#E0F4E3',
    },
  },
};

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
