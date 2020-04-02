import React from 'react';

export const languages = {
    en: 'English',
    jap: 'Japanese'
};

export const LanguageContext = React.createContext(
    languages.en
);