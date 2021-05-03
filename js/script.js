{
  const welcome = () => {
    console.log("Hello programmer!");
  };

  const hideNotification = () => {
    const notification = document.querySelector(".js-header__notification");
    const buttonOk = document.querySelector(".js-header__button");
    notification.remove();
    buttonOk.remove();
  };

  const hideFoldedSection = () => {
    const infoUnfold = document.querySelector(".js-section__foldUnfold");
    const buttonInfo = document.querySelector(".js-section__buttonInfo");
    infoUnfold.classList.toggle("section__hidden");
    buttonInfo.innerText = buttonInfo.innerText === "Pokaż" ? "Ukryj" : "Pokaż";
  };

  const init = () => {
    const buttonOk = document.querySelector(".js-header__button");
    const buttonInfo = document.querySelector(".js-section__buttonInfo");
    buttonOk.addEventListener("click", hideNotification);
    buttonInfo.addEventListener("click", hideFoldedSection);
  };

  welcome();
  init();
}