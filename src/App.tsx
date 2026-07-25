import React from "react";
import "./app.scss";

import Navbar from "./components/navbar/navbar.component";
import Cover from "./components/cover/cover.component";
import About from "./components/about/about.component";
import Footer from "./components/footer/footer.component";
import Projets from "./components/projets/projets.component";
import Parcours from "./components/parcours/parcours.component";

function App() {
  return (
    <div className="app">
      <div className="appNavbar">
        <Navbar />
      </div>

      <div className="appContent">
        <div className="coverSection">
          <Cover />
        </div>

        <div className="projets">
          <Projets />
        </div>

        <div className="parcours">
          <Parcours />
        </div>

        <div className="aboutSection">
          <About />
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
