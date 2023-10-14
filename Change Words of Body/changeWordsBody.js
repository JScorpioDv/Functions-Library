"use strict"
//By JScorpioDv

//FUNCTION
function changeWordsBody(){
    let body = document.body;
    let newBody = body.innerHTML;
    let existWord = 'sexo';
    let newWord = '<span class="blocked-content">"Contenido Bloqueado"</span>';

    //This "while" searches "existWord" in the body and replaces the words until "indexOf" is "-1".
    while (newBody.indexOf(existWord) !== -1) {
        newBody = newBody.replace(existWord, newWord);
    }

    body.innerHTML = newBody; //This line replaces the body for the newBody.
}