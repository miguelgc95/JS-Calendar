function togForEndDate(){
    document.getElementById("endDateToHide").classList.toggle("hide-me")
}

function togforReminder(){
    document.getElementById("reminderToHide").classList.toggle("hide-me")
}

function backgroundClose(event){
    console.log(event.target);
    if(event.target.classList.contains("backgroundCloseMe")){
        document.getElementById("modal").style.opacity=0;
        document.getElementById("modal").style.pointerEvents="none";
    }

}

/* function backgroundClose(event){
    console.log(event.target);
    if(event.target.classList.contains("backgroundCloseMe")){
        document.getElementById("modal").style.position= fixed;
        document.getElementById("modal").style.top= -100vh;
        document.getElementById("modal").style.left= 0;
        document.getElementById("modal").style.zIndex= 99999999;
        document.getElementById("modal").style.width= 100vw;
        document.getElementById("modal").style.height= 100vh;
        document.getElementById("modal").style.opacity= 0;
        document.getElementById("modal").style.transition= opacity 0.35s ease;
        document.getElementById("modal").style.backgroundColor= rgba(0, 0, 0, 0.4);
    }
} */

document.getElementById("endDateCheck").addEventListener("click", togForEndDate);
document.getElementById("reminderCheck").addEventListener("click", togforReminder);
document.getElementById("modal").addEventListener("click", backgroundClose);