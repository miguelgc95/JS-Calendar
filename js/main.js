localStorage.setItem("firstKey", JSON.stringify([
{boolEnd: false,
  boolReminder: true,
  description: "",
  endDate: "",
  initialDate: "2020-12-02T12:09",
  minutesReminder: "5m",
  title: "mik",
  typeOfEvent: "Meeting"}
]));
const mydate=new Date();
var reminderTrigger=[];
window.onload= trigger();

function createModal() {
  var modalRoot = document.getElementById('modal-root');
  var button = document.getElementById('modal-opener');
  var modal = document.querySelector('.modal');

  var cancelBtn = document.getElementById("cancelBtn");
  cancelBtn.addEventListener("click", rootClick);
  var closeTop = document.getElementById("closeTop");
  closeTop.addEventListener("click", rootClick);
  var addEventBtn = document.querySelectorAll(".addEventBtn");
  var createBtn = document.getElementById("storeEventInfo");
  createBtn.addEventListener("click", rootClick);

  for(let i = 0; i < addEventBtn.length; i++){
      addEventBtn[i].addEventListener("click", openModal);
  }

  modalRoot.addEventListener('click', rootClick);
  button.addEventListener('click', openModal);
  modal.addEventListener('click', modalClick);

  function rootClick(event) {
    if(event.target===createBtn && generalValidation()){
      modalRoot.classList.remove('visible');
      document.getElementById("modalForm").reset();
      document.getElementById("endDateToHide").classList.add("hide-me");
      document.getElementById("reminderToHide").classList.add("hide-me");
    }
    else if (event.target!=createBtn){
      modalRoot.classList.remove('visible');
      document.getElementById("modalForm").reset();
      document.getElementById("endDateToHide").classList.add("hide-me");
      document.getElementById("reminderToHide").classList.add("hide-me");
    }

  }

  function openModal() {
    modalRoot.classList.add('visible');
  }

  function modalClick(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    return false;
  }
  function togForEndDate(){
    document.getElementById("endDateToHide").classList.toggle("hide-me");
  }

  function togforReminder(){
    document.getElementById("reminderToHide").classList.toggle("hide-me");
  }
  document.getElementById("endDateCheck").addEventListener("click", togForEndDate);
  document.getElementById("reminderCheck").addEventListener("click", togforReminder);
}

/* Adding events on the calendar code */

function storeNewEvent(event){
  event.preventDefault();

  if (generalValidation()){
    let newEvent={
      title:document.getElementById("title").value,
      initialDate: document.getElementById("initialDate").value,
      boolEnd: document.getElementById("booleanEndDate").checked,
      endDate: document.getElementById("endDate").value,
      boolReminder: document.getElementById("booleanReminder").checked,
      minutesReminder: document.getElementById("minutes").value,
      description: document.getElementById("description").value,
      typeOfEvent: document.getElementById("typeOfEvent").value,
    }
    var arr=JSON.parse(localStorage.getItem("firstKey"));
    arr.push(newEvent);
    localStorage.setItem("firstKey", JSON.stringify(arr));
    addOneEvent();
  }
  else{}
}

function addOneEvent(){
  var arr=JSON.parse(localStorage.getItem("firstKey"));
  var sep=arr[arr.length-1].initialDate;
  var aux=sep.slice(0,-6);
  var aux2=sep.slice(0,-6)+"event";
  
  console.log(aux);
  var whatDay=document.getElementById(aux2);
  var displayEvent=document.createElement("button");
  displayEvent.innerHTML= document.getElementById("title").value;
  displayEvent.setAttribute("id", JSON.parse(localStorage.getItem("firstKey")).length-1);
  displayEvent.setAttribute("class", "eventModalButton");
  whatDay.append(displayEvent);
  displayEvent.addEventListener("click", (new createEventModal().openModal));
}

document.getElementById("storeEventInfo").addEventListener("click", storeNewEvent);

/* Validation code */

function generalValidation(){
  if(titleValidator()*initialDateValidator()){
    return true;
  }
}

function titleValidator(){
  var title = document.getElementById("title");
  if (title.value == "") {
    document.getElementById("titleStatus").innerHTML =
      "Please enter a title";
    document.getElementById("titleStatus").style.display = "block";
    return false;
  } else if (title.value.length > 60) {
    document.getElementById("titleStatus").innerHTML =
      "No more than 60 characters";
    document.getElementById("titleStatus").style.display = "block";
    return false;
  } else {
    document.getElementById("titleStatus").style.display = "none";
    return true;
  }
}

function initialDateValidator(){
  var initialDate = document.getElementById("initialDate");
  if (initialDate.value == "") {
    document.getElementById("initialDateStatus").innerHTML =
      "Please enter a date";
    document.getElementById("initialDateStatus").style.display = "block";
    return false;
  } else if (Date.parse(initialDate.value)< Date.parse(mydate) ){
    document.getElementById("initialDateStatus").innerHTML =
      "Cannot choose a previous date";
    document.getElementById("initialDateStatus").style.display = "block";
    return false;
  } else {
    document.getElementById("initialDateStatus").style.display = "none";
    return true;
  }
}

document.getElementById("title").addEventListener("blur", titleValidator);
document.getElementById("initialDate").onblur=function(){initialDateValidator()};

/* Timming code */
function trigger(){
  var arr=JSON.parse(localStorage.getItem("firstKey"));
  var t11=new Date();
  var t1=t11.getTime();
  console.log(t11)
  console.log(t1)
  arr.forEach(element => {
    console.log(element.initialDate)
    var t22=new Date(element.initialDate);
    var t2=t22.getTime();
    reminderTrigger.push(t2-t1);
  });
  GeneralReminder();
}

function GeneralReminder(){
  var aux=[];
  for(i=0;i<reminderTrigger.length;i++){
    aux.push(i);
  }
  aux.forEach(element => {
    var arr=JSON.parse(localStorage.getItem("firstKey"));
    if (arr[element].boolReminder && reminderTrigger[element]>0){
      var tim=arr[element].minutesReminder;
      setTimeout(function(){alert(tim+" minutes left for the event!")}, (reminderTrigger[element])/* (reminderTrigger[element]-tim.getMilliseconds()) */);
    }
  })
}