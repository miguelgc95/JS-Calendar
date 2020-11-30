function togforReminder(){
    document.getElementById("reminderToHide").classList.toggle("hide-me")
}

document.getElementById("reminderCheck").addEventListener("click", togforReminder);

function togForEndDate(){
    document.getElementById("endDateToHide").classList.toggle("hide-me")
}

document.getElementById("endDateCheck").addEventListener("click", togForEndDate);