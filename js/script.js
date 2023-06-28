var modal = document.querySelector(".modal-container");
var modalOpenButton = document.querySelector(".modal-open-button");
var modalCloseButton = document.querySelector(".modal-close-button");

modalOpenButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-container-close");
});

modalCloseButton.addEventListener("click", function() {
  modal.classList.add("modal-container-close");
});

document.addEventListener('keydown', function(evt) {
if (evt.key === "Escape") {
  modal.classList.add("modal-container-close")
};
});
