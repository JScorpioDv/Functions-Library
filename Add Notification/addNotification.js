"use strict"
//By JScorpioDv

//FUNCTIONS
function addNotification(notification, whereToPlaceIt){
    const notification = document.createElement("h3");
    notification.textContent = notification;
    notification.id = "notification";
    
    //We assign the notification after of the "whereToPlaceIt" element.
    whereToPlaceIt.insertAdjacentElement("afterend", error);

    //I configure a timer to delete the object after two seconds half past.
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

//EXPORT
export { addNotification };