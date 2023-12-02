import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uaTranslations from './translations/ua/ua.json';
import enTranslations from './translations/en/en.json';
import ruTranslations from './translations/ru/ru.json';
import plTranslations from './translations/pl/pl.json';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      pl: {
        translation: plTranslations,
      },
      ua: {
        translation: uaTranslations,
      },
      en: {
        translation: enTranslations,
      },
      ru: {
        translation: ruTranslations,
      }
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;