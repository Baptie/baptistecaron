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
      <div className="appNavbar sectionWIP">
        <Navbar />
      </div>

      <div className="appContent sectionWIP">
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

      <div className="wip">
        <img src="/img/wip.png" alt="" />
        <p>Version mobile en construction ...</p>
      </div>
    </div>
  );
}

export default App;
