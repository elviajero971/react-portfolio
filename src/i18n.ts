import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';
import fr from './translations/fr.json';

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        fr: { translation: fr }
    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language if current language cannot be found
    interpolation: { escapeValue: false } // not needed for react as it escapes by default
});

export default i18n;
