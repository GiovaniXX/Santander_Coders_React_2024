import React from "react";

import "./styles/App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

import nasaImg from "./assets/images/Nasa.jpg";
import portraitImg from "./assets/images/Portrait.jpg";
import malayalamImg from "./assets/images/Malayalam.jpeg";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <section id="articles">
          <Article
            title="Designing Dashboards"
            provider="Nasa"
            description="NASA stands for the National Aeronautics and Space Administration. It is the United States government agency
            responsible for the nation's civilian space program and for aeronautics and aerospace research. Founded in 1958, NASA is
            known for its space exploration missions, including manned and unmanned missions, the exploration of planets and other
            celestial bodies, as well as the development of new technologies for aviation and space exploration."
            thumbnail={nasaImg}
          />
          <Article
            title="Vibrant Portraits of 2024"
            provider="Portraits"
            description="Vibrant Portraits of 2024 encapsulates the essence of contemporary art, capturing the spirit and diversity of our time. These portraits, bursting with color and life, reflect the multifaceted identities and stories of individuals in the modern world. Each piece not only showcases the artist's skill but also serves as a window into the cultural and social currents shaping our society. The year 2024 brings a new wave of artistic expression, where traditional techniques blend seamlessly with innovative approaches, creating works that are both timeless and reflective of the current era."
            thumbnail={portraitImg}
          />
          <Article
            title="36 Days of Malayalam type"
            provider="Malayalam"
            description="36 Days of Malayalam Type is an inspiring project celebrating the beauty and versatility of the Malayalam script. Over 36 days, artists and designers explore the unique curves and lines of each letter, bringing them to life through innovative and creative designs. This initiative not only highlights the rich cultural heritage of the Malayalam language but also showcases its adaptability in modern design. By blending traditional elements with contemporary aesthetics"
            thumbnail={malayalamImg}
          />
          <Article
            title="Designing Dashboards"
            provider="Nasa"
            description="NASA stands for the National Aeronautics and Space Administration. It is the United States government agency
            responsible for the nation's civilian space program and for aeronautics and aerospace research. Founded in 1958, NASA is
            known for its space exploration missions, including manned and unmanned missions, the exploration of planets and other
            celestial bodies, as well as the development of new technologies for aviation and space exploration."
            thumbnail={nasaImg}
          />
        </section>
      </>
    );
  }
}

export default App;
