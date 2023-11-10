"use strict"
//By JScorpioDv

//FUNCTIONS
const generatorRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

//EXPORT
export { generatorRandomNumber };