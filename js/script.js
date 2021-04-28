console.log("Dzień dobry! Zastałem Jolkę?");

let buttonOk = document.querySelector(".header__button");
let notification = document.querySelector(".header__notification");

buttonOk.addEventListener("click", () => {
  notification.remove();
  buttonOk.remove();
});

let buttonInfo = document.querySelector(".section__buttonInfo");
let infoUnfold = document.querySelector(".section__unfold");

buttonInfo.addEventListener("click", () => {
  infoUnfold.classList.toggle("section__hidden");
  if (buttonInfo.innerText === "Pokaż") {
    buttonInfo.innerText = "Ukryj";
  } else {
    buttonInfo.innerText = "Pokaż";
  }
});
