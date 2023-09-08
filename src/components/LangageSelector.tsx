import React from 'react';
import {useTranslation} from 'react-i18next';
import '../styles/LangageSelector.scss'

function LanguageSelector() {
    const {i18n} = useTranslation();

    const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lng = e.target.value
        i18n.changeLanguage(lng);
    };

    return (
        <div className="langSelectDiv">
            <select className="langSelect"
                    value={i18n.language}
                    onChange={(e) => changeLanguage(e)}
            >
                <option value="en"> 🇬🇧 English</option>
                <option value="fr"> 🇫🇷 Français</option>
                {/* Ajoutez d'autres langues ici */}
            </select>
        </div>
    );
}

export default LanguageSelector;
