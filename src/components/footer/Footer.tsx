import React from 'react';
import '../../styles/footer.scss';
import github from "../../assets/icons/github-icon-white-6.jpg.png"
import instagram from "../../assets/icons/new-Instagram-logo-white-glyph.png"
import linkedin from "../../assets/icons/white-linkedin-icon-png-8.jpg.png"

export default function Footer() {

    const currentYear : number = new Date().getFullYear();
    return (
        <div className="footer">
            <div className="copyright">
                © Copyright - Baptiste CARON - {currentYear}
            </div>
            <div className="icons">
                <a href="https://github.com/Baptie" className="lienReseau">
                    <img className="iconeReseau" src={github} alt="github"/>
                </a>

                <a className="lienReseau" href="https://www.instagram.com/baptieleplusbeauptn/">
                    <img className="iconeReseau" src={instagram} alt="instagram"/>
                </a>

                <a className="lienReseau" href="www.linkedin.com/in/caron-baptiste">
                    <img className="iconeReseau" src={linkedin} alt="linkedin"/>
                </a>

            </div>
        </div>
    );
}