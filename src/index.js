import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Homepage, Schedule, Header, Footer } from "./components";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={Homepage} />
        <Route path="/schedule" exact component={Schedule} />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
