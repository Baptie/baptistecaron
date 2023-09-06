import React, {useEffect} from 'react';
import './App.css';

function App() {
    useEffect(() => {
        // Function to handle smooth scrolling
        function handleSmoothScroll(event: React.MouseEvent<HTMLAnchorElement>) {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href')?.substring(1);
            const targetElement = document.getElementById(targetId || '');

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth',
                });
            }
        }

        // Attach event listeners to navbar links
        const navbarLinks = document.querySelectorAll('.navbar a');
        navbarLinks.forEach((link) => {
            link.addEventListener('click', handleSmoothScroll as unknown as EventListener);
        });

        // Clean up event listeners on component unmount
        return () => {
            navbarLinks.forEach((link) => {
                link.removeEventListener('click', handleSmoothScroll as unknown as EventListener);
            });
        };
    }, []);

    return (
        <div className="App">

            <div className="navbar">
                <a href="#accueil">Accueil</a>
                <a href="#presentation">À Propos</a>
                <a href="#etudes">Parcours Scolaire</a>
                <a href="#parcoursPro">Expériences professionnelles</a>
                <a href="#competences">Compétences</a>
            </div>

            <div className="content">
                <section id="accueil" className="accueil">
                    <div className="image-container">
                        <img
                            src="/photo_baptie.jpeg" // Assurez-vous de spécifier le chemin correct vers votre image
                            alt="Baptiste PP"
                            className="rounded-image"
                        />
                    </div>
                    <div className="intitulé">
                        <p className="nom"> Baptiste CARON</p>
                        <p className="poste"> Ingénieur Logiciel </p>
                    </div>
                </section>
                <section id="presentation" className="presentation">
                    <h1 className="sectionTitle">À Propos</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </section>

                <section id="etudes" className="etudes">
                    <h1 className="sectionTitle">Parcours Scolaire</h1>
                    <p>Contenu de la section 2.</p>
                </section>

                <section id="parcoursPro" className="parcoursPro">
                    <h1 className="sectionTitle">Expérience Professionnelle</h1>
                    <p>Contenu de la section 3.</p>
                </section>

                <section id="competences" className="competences">
                    <h1 className="sectionTitle">Compétences</h1>
                    <p>Contenu de la section 3.</p>
                </section>

                <section id="hobbies" className="hobbies">
                    <h1 className="sectionTitle">Hobbies</h1>
                    <p>Contenu de la section 3.</p>
                </section>
            </div>
        </div>
    );
}

export default App;
