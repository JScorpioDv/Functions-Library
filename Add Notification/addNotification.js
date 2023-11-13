"use strict"
//By JScorpioDv

//FUNCTIONS
/**
 * 
 * @param {string} message 
 * @param {Element HTML} whereToPlaceIt 
 * @param {string} position {"beforebegin" , "afterbegin", "beforeend", "afterend"}
 */
function addNotification(position, whereToPlaceIt, message){
    const notification = document.createElement("h3");
    notification.textContent = message;
    notification.id = "notification";
    
    //We assign the notification after of the "whereToPlaceIt" element.
    whereToPlaceIt.insertAdjacentElement(position, notification);

    //I configure a timer to delete the object after two seconds half past.
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

//EXPORT
export { addNotification };