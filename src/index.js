import React from "react";
import ReactDOM from "react-dom";
import { Schedule, Header, Footer } from "./components";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Schedule />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
