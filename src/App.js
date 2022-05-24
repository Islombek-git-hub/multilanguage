import React from "react";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Hello",
        p: "Welcome to react",
      },
    },
    uz: {
      translation: {
        welcome: "Assalomu Aleykum",
        p: "Reactga xush kelibsiz",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

function App() {
  const { t } = useTranslation();
  const onChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <>
      <h2>{t("welcome")}</h2>
      <p>{t("p")}</p>
      <select onChange={onChange}>
        <option value="en" key="">
          en
        </option>
        <option value="uz" key="">
          uz
        </option>
      </select>
    </>
  );
}
export default App;
