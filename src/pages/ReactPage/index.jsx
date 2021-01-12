import React from "react";
import { Trans, useTranslation } from "react-i18next";
import ControlCarousel from '../../components/Carousel';
import logo from "../../logo.svg";

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
      <ControlCarousel />
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
