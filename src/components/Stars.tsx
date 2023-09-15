import React, {useEffect, useState} from 'react';
import '../styles/Stars.scss';

function Stars() {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const createStar = () => {
            const size = Math.random() * 4 + 1;
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const animationDuration = Math.random() * 5 + 2;

            return {
                size,
                top,
                left,
                animationDuration,
            };
        };

        const generateStars = () => {
            const newStars = [];
            for (let i = 0; i < 100; i++) {
                newStars.push(createStar());
            }
            // @ts-ignore
            setStars(newStars);
        };

        generateStars();

        // Refresh stars every 5 seconds
        const interval = setInterval(generateStars, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="stars-container">

        </div>
    );
}

export default Stars;
