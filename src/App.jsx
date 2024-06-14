import React from "react";

import "./styles/App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <section id="articles">
        <Article title="Designing Dashboards" />
        <Article title="The Future is now" />
        <Article title="The Future is now" />
        <Article title="The Future is now" />

        </section>
      </>
    );
  }
}

export default App;
