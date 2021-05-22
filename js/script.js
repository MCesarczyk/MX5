{
  const welcome = () => {
    console.log("Hello programmer!");
  };

  const notificationButton = document.querySelector(".js-notificationButton");
  const infoButton = document.querySelector(".js-infoButton");


  const hideNotification = () => {
    const notification = document.querySelector(".js-header__notification");
    notification.remove();
    notificationButton.remove();
  };

  const hideFoldedSection = () => {
    const infoUnfold = document.querySelector(".js-section__foldUnfold");
    infoUnfold.classList.toggle("section__hidden");
    infoButton.innerText = infoButton.innerText === "Pokaż" ? "Ukryj" : "Pokaż";
  };

  const init = () => {
    welcome();
    notificationButton.addEventListener("click", hideNotification);
    infoButton.addEventListener("click", hideFoldedSection);
  };

  init();
}