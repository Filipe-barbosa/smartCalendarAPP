import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationPT from './locales/pt/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      'pt-BR': {
        translation: translationPT
      }
    },
    fallbackLng: 'pt-BR',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;