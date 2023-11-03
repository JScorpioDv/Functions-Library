"use strict"
//By JScorpioDv
//¡¡¡EXAMPLE!!!

/*
    NOTE:
    You need a server to work the import.
*/

//IMPORTS
import { generateColorRGB } from "./generatorHexadecimalColor.js";

window.onload = () =>{
    
    //VARIABLES
    const body = document.body;

    //FUNCTIONS
    function changeColor() {
        body.style.backgroundColor = generateColorRGB();
    }

    function addEventBackground() {
        body.addEventListener("dblclick", changeColor, false);
    }

    //PLAY
    addEventBackground();
}