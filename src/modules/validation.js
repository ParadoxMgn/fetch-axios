export const validation = () => {
  const loadBtnValid = document.querySelector(".js-load-valid");
  const inputValid = document.querySelector(".js-input-valid");
  const errorBlock = document.querySelector(".error");
  const messageBlock = document.querySelector(".message ");

  class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.emptyErr = "Поле пустое";
      this.stringErr = "Вы ввели не число";
      this.lessErr = "Вы ввели число меньше 5";
      this.moreErr = "Вы ввели число больше 10";
    }
  }

  const showMessage = message => {
    errorBlock.innerHTML = ``;
    messageBlock.innerHTML = `Вы ввели ${message}`;
    inputValid.value = '';
  }

  const showError = error => {
    messageBlock.innerHTML = ``;
    errorBlock.innerHTML = `${error}`;
    inputValid.value = '';
  }

  const validationInput = inputText => {
    const myError = new ValidationError();

    try {
      if (inputText.trim() === "") throw myError.emptyErr;
      if (isNaN(inputText)) throw myError.stringErr;
      if (+inputText < 5) throw myError.lessErr;
      if (+inputText > 10) throw myError.moreErr;

      showMessage(inputText);
    } catch (err) {
      showError(err);
    }
  }

  loadBtnValid.addEventListener("click", function (evt) {
    evt.preventDefault();

    validationInput(inputValid.value);
  });
}