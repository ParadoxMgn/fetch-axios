export const scripts = () => {
  const loadBtn = document.querySelector(".js-load");
  const resultsContainer = document.querySelector(".js-results");
  const searchInput = document.querySelector(".js-input");

  const showUser = data => resultsContainer.innerHTML = 
    `<div class="response-container">
      <img src="${data.avatar_url}">
      <p> Имя: <span>${data.name}</span><p>
      <p> О себе: <span>${data.bio}</span><p>
      <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
    </div>`;

  const showErr = err => resultsContainer.innerHTML = 
    `<div class="response-container">
      <p> ${err.name}: <span>${err.message}</span><p>
    </div>`;

  loadBtn.addEventListener("click", function (evt) {
    evt.preventDefault();

    const searchValue = searchInput.value.trim().toLowerCase();

    fetch(`https://api.github.com/users/${searchValue}`)
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Not Found') throw new Error(data.message);
        showUser(data);
      })
      .catch(err => showErr(err));
  });
}


