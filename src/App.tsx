import React from 'react';
import './app.scss';

import Competences from "./components/competences/competences.component";
import ExperiencePro from "./components/experiencesProfessionnelles/experiencesProfessionnelles.component.tsx";
import Associatif from "./components/associatif/associatif.component";
import Navbar from './components/navbar/navbar.component';
import Cover from './components/cover/cover.component';
import About from './components/about/about.component';
import Footer from './components/footer/footer.component';


function App() {
    return (
        <div className="app">
            <div className="appNavbar">
                <Navbar/>
            </div>
            
            <div className='appContent'>
           
                <div className="coverSection">
                    <Cover/>

                </div>

                <div className="aboutSection">
                    <About/>
                </div>

                <div className="competencesSection">
                    <Competences/>
                </div>

                <div className="experiencesSection">
                    <ExperiencePro/>
                </div>

                <div className="assoSection">
                    <Associatif/>
                </div>
                <div className="footer">
                    <Footer/>
                </div>
        </div>
        </div>
        
    );
}

export default App;
