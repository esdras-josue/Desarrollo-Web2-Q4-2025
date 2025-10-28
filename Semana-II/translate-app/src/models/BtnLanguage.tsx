import { BtnLanguagesProps } from '@/app/models/btnLanguageProps'
import React from 'react'

export const BtnLanguages = ({Languages, changeLanguage } : BtnLanguagesProps) => {
    return (
        <button onClick={() => changeLanguage(Languages)}>
            {Languages === "es" ? "change to Spanish": "change to English"}
        </button>
    );
};