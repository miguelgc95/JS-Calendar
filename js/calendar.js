//get elements on the html
var calendarDate = document.getElementById("calendarDate");
var calendarGrid = document.getElementById("calendarGrid");

//delcare date variables
var date = new Date();
var dayOfMonth = date.getDate();
var dayOfWeek = date.getDay();
var month = date.getMonth();
var year = date.getFullYear();
var monthS = "";
var daysInMonth = "";
var dayMonthStarted = "";

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
    if(dayOfMonth <10){
        dayOfMonth = "0"+dayOfMonth;
    }
    calendarDate.innerHTML = monthS + " " + dayOfMonth + ", " + year;
}

window.onload = setCalendarDate();

function monthStartsWith(){
    whatMonth();
    dayMonthStarted = new Date(year + "-" + (month+1) + "-01").getDay();
    if(dayMonthStarted == 0){
        dayMonthStarted = 7;
    }
}

function createCalendar(){
    monthStartsWith();
    for(let i = 1; i < (daysInMonth+dayMonthStarted); i++){
        if(i < dayMonthStarted){
            //empty square on calendar
            var calendarEmpty = document.createElement("div");
            calendarEmpty.classList.add("emptySquare");
            calendarGrid.append(calendarEmpty);
        }
        else{
            //create div
            var calendarSquare = document.createElement("div");
            calendarSquare.classList.add("dayOnCalendar");

            //set text on div
            calendarSquare.innerHTML = (i-dayMonthStarted)+1;

            //create btn to add event on div
            var addEventBtn = document.createElement("button");
            addEventBtn.classList.add("addEventBtn");
            //adding btn to div
            calendarSquare.append(addEventBtn);
            //adding div to calendar
            calendarGrid.append(calendarSquare);
            /*calendarSquare.setAttribute("id", (i-dayMonthStarted)+1);*/
            console.log(i-dayMonthStarted+1);
        }

    }
    
}

window.onload = createCalendar();
