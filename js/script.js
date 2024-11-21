'use strict';

document.addEventListener('DOMContentLoaded', initRandomColor);

function initRandomColor() {
    const button = document.getElementById("btn");
    const color = document.querySelector(".color");
    const hex = ["0", '1', "2", '3', "4", '5', "6", '7', "8", '9', "A", 'B', "C", 'D', "E", 'F'];

    const getRandomValues = (hex) => Math.floor(Math.random() * hex.length);

    function generateHex(hex) {
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[getRandomValues(hex)];
        }

        return hexColor;
    }

    const changeColorAndText = () => {
        const hexColor = generateHex(hex);

        document.body.style.backgroundColor = hexColor;
        color.textContent = hexColor;
    }

    if(button) {
        button.addEventListener("click", changeColorAndText);
        button.click();
    }
}
