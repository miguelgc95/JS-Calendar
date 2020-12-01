function togForEndDate(){
    document.getElementById("endDateToHide").classList.toggle("hide-me")
}

function togforReminder(){
    document.getElementById("reminderToHide").classList.toggle("hide-me")
}

document.getElementById("endDateCheck").addEventListener("click", togForEndDate);
document.getElementById("reminderCheck").addEventListener("click", togforReminder);