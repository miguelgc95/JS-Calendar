function createEventModal(){
    var modalRoot = document.getElementById('modal-root-event');
    var modal = document.querySelector('.eventModal');

    var modalEventCancelBtn = document.getElementById("modalEventCancelBtn");
    modalEventCancelBtn.addEventListener("click", rootClick);
    var modalEventCloseTop = document.getElementById("modalEventCloseTop");
    modalEventCloseTop.addEventListener("click", rootClick);
    var arr = JSON.parse(localStorage.getItem("firstKey"));
    
    for(let i = 0; i < arr.length; i++){
        var eventModalButton = document.getElementById([i]);
        eventModalButton.addEventListener("click", setUpModal);
        eventModalButton.addEventListener("click", openModal);
    }
    
    function setUpModal(e){
        for(let i = 0; i < arr.length; i++){
            console.log(arr[i]);
            console.log(e.target.id);
            if(e.target.id == arr.length-1){
                document.getElementById("modalEventTitle").innerHTML = arr[i].title;
                document.getElementById("modalEventDate").innerHTML = arr[i].initialDate;
                document.getElementById("modalEventType").innerHTML = arr[i].typeOfEvent;
                document.getElementById("modalEventDescription").innerHTML = arr[i].description;
            }
        }
    }
    

    modalRoot.addEventListener('click', rootClick);
    modal.addEventListener('click', modalClick);

    function rootClick() {
        modalRoot.classList.remove('visible');
    }

    function openModal() {
        modalRoot.classList.add('visible');
        
    }

    function modalClick(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
    }
}