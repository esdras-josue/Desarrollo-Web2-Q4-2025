import React from "react";

export interface BtnLanguagesProps{
    Languages: "es" | "en";
    changeLanguage: (Languages: "es"|"en") => void;
}