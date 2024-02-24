const btnOpen = document.querySelectorAll(".btn");
const btnClose = document.querySelector(".close-modal-button");
const btnModal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const handleOpenModal = function () {
  btnModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const handleCloseModal = function () {
  btnModal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpen.length; i++) {
  btnOpen[i].addEventListener("click", handleOpenModal);
}

btnClose.addEventListener("click", handleCloseModal);
overlay.addEventListener("click", handleCloseModal);

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape" && !btnModal.classList.contains("hidden"))
    handleCloseModal();
});
