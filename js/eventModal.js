function createEventModal(){
    var modalRoot = document.getElementById('modal-root-event');
    var modal = document.querySelector('.eventModal');

    var modalEventCancelBtn = document.getElementById("modalEventCancelBtn");
    modalEventCancelBtn.addEventListener("click", rootClick);
    var modalEventCloseTop = document.getElementById("modalEventCloseTop");
    modalEventCloseTop.addEventListener("click", rootClick);

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