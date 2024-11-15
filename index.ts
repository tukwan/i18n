import i18next from 'i18next';
import './i18n/config.js';

// i18next.services.formatter.add('uppercase', (value, lng, options) => {
//   return value.toUpperCase();
// });

// i18next.services.formatter.add('uppercase', (value, lng, options) => {
//   console.log('ZZZ', value);

//   return value.toUpperCase();
// });

const a = i18next.t('ns1:test', { val: 'test' });
console.log(a);

const b = i18next.t('ns1:title', { format: 'uppercase' });
console.log(b);
