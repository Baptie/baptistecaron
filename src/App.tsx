import React from 'react';
import './styles/app.scss';
import './styles/effects.scss';

import Footer from "./components/footer/Footer";
import Competences from "./components/competences/competences.component";
import ExperiencePro from "./components/experiencesProfessionnelles/experiencesProfessionnelles.component.tsx";
import School from "./components/school/school.component";
import Starfield from "./components/shared/starfield.component";
import Associatif from "./components/associatif/associatif.component";

import Navbar from './components/navbar/navbar.component';
import Cover from './components/cover/cover.component';

function App() {
    return (
        <div className="App">
            
            <header className="framer-top"></header>

            <Navbar/>

            <Starfield/>

            <div className="content">
                <Cover/>
                <School/>
                <ExperiencePro/>
                <Competences/>
                <Associatif/>
            </div>

            <div className="framer-bot"></div>

            <Footer/>
        </div>
    );
}

export default App;
