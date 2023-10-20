"use strict"
//Created by "ChatGPT"

//FUNCTIONS
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
}

/**
 * NOTE:
 * Visual Studio Code has a interface for create UUID without externs functions.
 * This interface is "Crypto" and the method for create UUID is:
 * 
 * METHOD = crypto.randomUUID();
*/