import '../../styles/stars.scss'
import React, {useEffect} from "react";

export default function Starfield(){
    useEffect(() => {
        function displayStars() {
            const starfieldElement = document.querySelector('.starfield') as HTMLElement;
            if (window.scrollY > 500) {
                starfieldElement.style.opacity = "0";
            } else {
                starfieldElement.style.opacity = "1";
            }
        }



        function starsDisappear(event: React.MouseEvent<HTMLAnchorElement>){
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href')?.substring(1);
            const targetElement = document.getElementById(targetId || '');

            if (targetElement) {
                window.scrollTo({
                    behavior: 'smooth',
                    top: targetElement.getBoundingClientRect().top + window.scrollY,

                });

            }

        }

        const navbarLinks = document.querySelectorAll('.navbar a');
        navbarLinks.forEach((link) => {
            link.addEventListener('click', starsDisappear as unknown as EventListener);
        });

        window.addEventListener("scroll",displayStars)

        return () => {
            navbarLinks.forEach((link) => {
                link.removeEventListener('click', starsDisappear as unknown as EventListener);
            });
        };

    }, []);

    return (
        <div className="starfield">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
        </div>
    );
}