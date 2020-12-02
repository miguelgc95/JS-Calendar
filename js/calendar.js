
//get elements on the html
var calendarDate = document.getElementById("calendarDate");
var calendarGrid = document.getElementById("calendarGrid");

//delcare date variables
const date = new Date();
const today = date.getDate();
const dayOfWeek = date.getDay();
var month = date.getMonth();
var year = date.getFullYear();
var monthS = "";
var daysInMonth = "";
var dayMonthStarted = "";
var todayId = today+"-"+month+"-"+year;

window.onload = createCalendar();
window.onload = setCalendarDate();


function whatMonth(){
    switch(month){
        case 0:{
            monthS = "January";
            daysInMonth = 31;
            break;
        }
        case 1:{
            monthS = "February";
            if(year%4==0){
                daysInMonth = 29;
            }else{
                daysInMonth = 28;
            }
            break;
        }
        case 2:{
            monthS = "March";
            daysInMonth = 31;
            break;
        }
        case 3:{
            monthS = "April";
            daysInMonth = 30;
            break;
        }
        case 4:{
            monthS = "May";
            daysInMonth = 31;
            break;
        }
        case 5:{
            monthS = "June";
            daysInMonth = 30;
            break;
        }
        case 6:{
            monthS = "July";
            daysInMonth = 31;
            break;
        }
        case 7:{
            monthS = "August";
            daysInMonth = 31;
            break;
        }
        case 8:{
            monthS = "September";
            daysInMonth = 30;
            break;
        }
        case 9:{
            monthS = "October";
            daysInMonth = 31;
            break;
        }
        case 10:{
            monthS = "November";
            daysInMonth = 30;
            break;
        }
        case 11:{
            monthS = "December";
            daysInMonth = 31;
            break;
        }
    }
}

function setCalendarDate(){
    whatMonth();
    if(today <10){
        var t = "0"+today;
        calendarDate.innerHTML = monthS + " " + t + ", " + year;
    }
    if(today >= 30 && month == 1){
        if(year%4==0){
            daysInMonth = 29;
            calendarDate.innerHTML = monthS + " 29, " + year;
        }else{
            daysInMonth = 28;
            calendarDate.innerHTML = monthS + " 28, " + year;
        }
    }else{
        if(today == 31 && daysInMonth == 30){
            calendarDate.innerHTML = monthS + " 30, " + year;
        }else{
            calendarDate.innerHTML = monthS + " " + t + ", " + year;
        }
    }
}



function monthStartsWith(){
    whatMonth();
    dayMonthStarted = new Date(year + "-" + (month+1) + "-01").getDay();
    if(dayMonthStarted == 0){
        dayMonthStarted = 7;
    }
}

function createCalendar(){
    monthStartsWith();
    var calendarContainer = document.createElement("div");
    calendarContainer.setAttribute("id", "calendarContainer");
    calendarGrid.append(calendarContainer);
    for(let i = 1; i < (daysInMonth+dayMonthStarted); i++){
        if(i < dayMonthStarted){
            //empty square on calendar
            var calendarEmpty = document.createElement("div");
            calendarEmpty.classList.add("emptySquare");
            calendarContainer.append(calendarEmpty);
        }
        else{
            //create div
            var calendarSquare = document.createElement("div");
            calendarSquare.classList.add("dayOnCalendar");
            if((i-dayMonthStarted+1)<10){
                calendarSquare.setAttribute("id", year+"-"+(month+1)+"-"+('0'+(i-dayMonthStarted+1)));
            }
            else{
                calendarSquare.setAttribute("id", year+"-"+(month+1)+"-"+(i-dayMonthStarted+1));
            }
            //set text on div
            calendarSquare.innerHTML = (i-dayMonthStarted)+1;
            //create btn to add event on div
            //<a href="#"></a>
            var addEventBtn = document.createElement("button");
            var addIcon = document.createElement("i");
            addIcon.classList.add("fas");
            addIcon.classList.add("fa-calendar-plus");
            addEventBtn.append(addIcon);
            addEventBtn.classList.add("addEventBtn");
            addEventBtn.addEventListener("click", (new createModal()).openModal);
            //adding btn to div
            calendarSquare.append(addEventBtn);
            //addEvent();
            //adding div to calendar
            calendarContainer.append(calendarSquare);
        }
        focusDay();
    }
    createEvent();
}

document.getElementById("nextButton").addEventListener("click", switchMonthNext);

function switchMonthNext(){
    var calendarContainer = document.getElementById("calendarContainer");
    calendarContainer.classList.add("removedNext");
    if(month < 11){
        month +=1;
        whatMonth();
        setCalendarDate();
        monthStartsWith();
        calendarContainer.addEventListener("transitionend",() => {
            calendarContainer.remove();
            createCalendar();
            document.getElementById("calendarContainer").classList.add("addNext");
        })
    }else{
        month = 0;
        year +=1;
        console.log(month);
        whatMonth();
        setCalendarDate();
        monthStartsWith();
        calendarContainer.addEventListener("transitionend",() => {
            calendarContainer.remove();
            createCalendar();
            document.getElementById("calendarContainer").classList.add("addNext");
        })
    }
}

document.getElementById("backButton").addEventListener("click", switchMonthBack);
function switchMonthBack(){
    var calendarContainer = document.getElementById("calendarContainer");
    calendarContainer.classList.add("removedBack");
    if(month > 0){
        month -=1;
        whatMonth();
        setCalendarDate();
        monthStartsWith();
        calendarContainer.addEventListener("transitionend",() => {
            calendarContainer.remove();
            createCalendar();
            document.getElementById("calendarContainer").classList.add("addBack");
        })
    }else{
        month = 11;
        year -=1;
        whatMonth();
        setCalendarDate();
        monthStartsWith();
        calendarContainer.addEventListener("transitionend",() => {
            calendarContainer.remove();
            createCalendar();
            document.getElementById("calendarContainer").classList.add("addBack");
        })
    }
}

function focusDay(){
    var divArr = document.getElementsByTagName("div");
    for(let i = 0; i < divArr.length; i++){
        if(document.getElementsByTagName("div")[i].id == todayId){
            document.getElementsByTagName("div")[i].classList.add("focusToday");
        }
    }
}

function createEvent(){
    var arr=JSON.parse(localStorage.getItem("firstKey"));
    arr.forEach(element => {
        console.log(document.getElementById(element.initialDate))
        console.log(element.initialDate);
        var whatDay=document.getElementById(element.initialDate);
        var displayEvent=document.createElement("button");
        displayEvent.innerHTML="Event today";
        whatDay.append(displayEvent);
    });
}