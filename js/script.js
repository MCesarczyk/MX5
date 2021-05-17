{
  const welcome = () => {
    console.log("Hello programmer!");
  };

  const buttonOk = document.querySelector(".js-buttonOk");
  const buttonInfo = document.querySelector(".js-buttonInfo");


  const hideNotification = () => {
    const notification = document.querySelector(".js-header__notification");
    notification.remove();
    buttonOk.remove();
  };

  const hideFoldedSection = () => {
    const infoUnfold = document.querySelector(".js-section__foldUnfold");
    infoUnfold.classList.toggle("section__hidden");
    buttonInfo.innerText = buttonInfo.innerText === "Pokaż" ? "Ukryj" : "Pokaż";
  };

  const init = () => {
    buttonOk.addEventListener("click", hideNotification);
    buttonInfo.addEventListener("click", hideFoldedSection);
  };

  welcome();
  init();
}