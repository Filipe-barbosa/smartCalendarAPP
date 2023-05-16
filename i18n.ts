import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector'; Se quiser adicionar para pegar a linguagem do browser.

import translations from './locales';

const i18nConfig = {
  resources: translations,
  fallbackLng: 'pt-BR',
  defaultNS: 'translations',
};

i18n.use(initReactI18next).init(i18nConfig);

export default i18n;
