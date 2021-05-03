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

  const buttonInfo = document.querySelector(".section__buttonInfo");
  const infoUnfold = document.querySelector(".section__unfold");

  buttonInfo.addEventListener("click", () => {
    infoUnfold.classList.toggle("section__hidden");
    if (buttonInfo.innerText === "Pokaż") {
      buttonInfo.innerText = "Ukryj";
    } else {
      buttonInfo.innerText = "Pokaż";
    }
  });

  const init = () => {
    buttonOk.addEventListener("click", hideNotification);
  };

  welcome();
  init();

}