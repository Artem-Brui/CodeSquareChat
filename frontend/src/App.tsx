// import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import FAQPage from "./components/log-in/FAQ/FAQPage";
import TermsAndConditions from "./components/log-in/TermsAndConditions/TermsAndConditions";
import WelcomePage from "./components/log-in/WelcomePage";
// import React, { Component } from "react";

function App() {
  return (
    <div>
      <FAQPage />
      <TermsAndConditions />
      <WelcomePage />
    </div>
  );
}

export default App;
