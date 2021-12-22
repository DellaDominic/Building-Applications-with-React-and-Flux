import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

const route = window.location.pathname;

function App() {
  if (route === "/about") return <AboutPage />;
  return <HomePage />;
}

export default App;
