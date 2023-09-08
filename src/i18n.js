import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
    // Liste des langues prises en charge
    supportedLngs: ['en', 'fr'],

    // Langue par défaut
    fallbackLng: 'fr',

    // Chemin vers les fichiers de traduction
    resources: {
        en: {
            translation: require('./locales/en.json')
        },
        fr: {
            translation: require('./locales/fr.json'),
        },
    },


});

export default i18n;
