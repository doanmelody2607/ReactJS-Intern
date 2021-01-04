import React from "react";
import logo from "../../logo.svg";
import { useTranslation, Trans } from "react-i18next";

const ReactPage = () => {
  const { t, i18n } = useTranslation();
  function handleChangeLanguageClick(lang) {
    i18n.changeLanguage(lang);
  }
  const name = "df";
  const a = (
    <Trans
      i18nKey="title" // optional -> fallbacks to defaults if not provided
      components={{ bold: <strong /> }}
    />
  );
  return (
    <div className="App">
      <nav style={{ width: "100%", padding: "2rem", backgroundColor: "gray" }}>
        <button onClick={() => handleChangeLanguageClick("en")}>English</button>
        <button onClick={() => handleChangeLanguageClick("vi")}>
          Tiếng Việt
        </button>
        <button onClick={() => handleChangeLanguageClick("de")}>French</button>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{a}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{t("description.part1")}</p>
          <p>{t("description.part2")}</p>
        </a>

        <Trans i18nKey="title">
          Hello <strong>{{ name }}</strong>.
        </Trans>
      </header>
    </div>
  );
};

export default ReactPage;
