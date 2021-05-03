{
  const welcome = () => {
    console.log("Hello programmer!");
  };

  const buttonOk = document.querySelector(".js-header__button");

  const hideNotification = () => {
    const notification = document.querySelector(".js-header__notification");
    notification.remove();
    buttonOk.remove();
  };

  const hideFoldedSection = () => {
    const infoUnfold = document.querySelector(".js-section__foldUnfold");
    infoUnfold.classList.toggle("section__hidden");
    if (buttonInfo.innerText === "Pokaż") {
      buttonInfo.innerText = "Ukryj";
    } else {
      buttonInfo.innerText = "Pokaż";
    }
  };

  const init = () => {
    const buttonInfo = document.querySelector(".js-section__buttonInfo");
    buttonOk.addEventListener("click", hideNotification);
    buttonInfo.addEventListener("click", hideFoldedSection);
  };

  welcome();
  init();
}