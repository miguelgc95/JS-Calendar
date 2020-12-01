

function createModal() {
  var modalRoot = document.getElementById('modal-root');
  var button = document.getElementById('modal-opener');
  var modal = document.querySelector('.modal');

  var cancelBtn = document.getElementById("cancelBtn");
  cancelBtn.addEventListener("click", rootClick);
  var closeTop = document.getElementById("closeTop");
  closeTop.addEventListener("click", rootClick);
  var addEventBtn = document.querySelectorAll(".addEventBtn");
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