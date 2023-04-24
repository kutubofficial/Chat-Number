import React from "react";
const Colour = () => {
    const changeColour = (e) => {
        const body = document.querySelector('body');
        body.style.background = getRandomColour();
        e.target.style.backgroundColor = getRandomColour();
    };
        const getRandomColour = () => {
            let letter = '0123456789ABCDEF';
            let Color = '#'
            for (let i = 0; i < 6; i++) {
                Color += letter[Math.floor(Math.random() * 16)];
            }
            return Color;
        }
    
    return (
        <div>
            <button id="btn" onClick={changeColour}>Change Color</button>
        </div>
    )
}
export default Colour;