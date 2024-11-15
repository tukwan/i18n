import i18next from 'i18next';
import ns1 from './en/ns1.js';

export const defaultNS = 'ns1';

export const resources = {
  en: {
    ns1,
  },
};

i18next.init({
  lng: 'en',
  // debug: true,
  resources,
  defaultNS,
  interpolation: {
    format: (value, format, lng, options) => {
      console.log('INTER', value, format, lng, options);

      if (format === 'uppercase') {
        return value.toUpperCase();
      }
      return value;
    },
  },
});
