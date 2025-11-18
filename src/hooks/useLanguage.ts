import { useState } from "react";
import type { Language } from "../types/language";
import i18next from "i18next";


export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem("language") as Language | null;
    return savedLang ?? "en";
  });

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    i18next.changeLanguage(lang);
  };

  return { language, changeLanguage };
};

