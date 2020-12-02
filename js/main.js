localStorage.setItem("firstKey", JSON.stringify([]));
const mydate=new Date();
/* const compare */

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

  function rootClick() {
    modalRoot.classList.remove('visible');
    document.getElementById("modalForm").reset();
    document.getElementById("endDateToHide").classList.add("hide-me");
    document.getElementById("reminderToHide").classList.add("hide-me");
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

document.getElementById("title").addEventListener("blur", titleValidator);
document.getElementById("initialDate").onblur=function(){initialDateValidator()};

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
    document.getElementById("initialDateStatus").style.display = "block";/* 
    document.getElementById("initialDate").onblur=function(){initialDateValidator()}; */
    return false;
  } else if (Date.parse(initialDate.value)< Date.parse(mydate) ){
    document.getElementById("initialDateStatus").innerHTML =
      "Cannot choose a previous date";
    document.getElementById("initialDateStatus").style.display = "block";/* 
    document.getElementById("initialDate").onblur=function(){initialDateValidator()}; */
    return false;
  } else {
    document.getElementById("initialDateStatus").style.display = "none";
    return true;
  }
}

/* function initialDateValidator(){

}

function validateForm(){
  
} */
/* 
function validateForm(){
  document.getElementById("title").value

  title:document.getElementById("title").value,
  initialDate: document.getElementById("initialDate").value,
  boolEnd: document.getElementById("booleanEndDate").checked,
  endDate: document.getElementById("endDate").value,
  boolReminder: document.getElementById("booleanReminder").checked,
  minutesReminder: document.getElementById("minutes").value,
  description: document.getElementById("description").value,
  typeOfEvent: document.getElementById("typeOfEvent"),

  if(){
    return true
  }
  else{
    return flase
  }
} */

function storeNewEvent(event){
  event.preventDefault();

  if (true/* validateForm() */){
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
}

function addOneEvent(){
  var arr=JSON.parse(localStorage.getItem("firstKey"));
  console.log(arr[arr.length-1]);
  var whatDay=document.getElementById(arr[arr.length-1].initialDate);
  var displayEvent=document.createElement("button");
  displayEvent.innerHTML= document.getElementById("title").value;
  displayEvent.setAttribute("id", arr.length-1);
  displayEvent.setAttribute("class", "eventModalButton");
  whatDay.append(displayEvent);
  
  displayEvent.addEventListener("click", (new createEventModal().openModal));
}

document.getElementById("storeEventInfo").addEventListener("click", storeNewEvent);