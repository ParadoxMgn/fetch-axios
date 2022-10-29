import axios from 'axios';

export const scriptsAxios = () => {
  const loadBtnUsers = document.querySelector(".js-load-users");
  const resultsContainer = document.querySelector(".js-results");

  const showUsers = resp => {
    resultsContainer.innerHTML = '';

    if (resp.data) {
      resp.data.map(user => {
        resultsContainer.insertAdjacentHTML("beforeend", 
        `<div class="response-container">
          <p> User №: <span>${user.id}</span><p>
          <p> Имя: <span>${user.name}</span><p>
          <p> e-Mail: <span>${user.email}</span><p>
          <p> Номер телефона: <span>${user.phone}</span><p>
        </div>`)
      })
    }
  }

  loadBtnUsers.addEventListener("click", evt => {
    evt.preventDefault();

    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => showUsers(response))
      .catch(error => console.log(error));
  });
}
