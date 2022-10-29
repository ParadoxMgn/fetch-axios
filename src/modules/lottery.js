export const lottery = async () => {

  try {
    console.log("Вы начали игру");
    let promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        Math.random(0) > 0.5 ? resolve() : reject("Вы промахнулись");
      }, 1000);
    });
    await promise;
    console.log("Вы выиграли")
    console.log("Вам заплатили")
  } catch (error) {
    console.log(error)
    console.log("Игра закончена")
  }
}
