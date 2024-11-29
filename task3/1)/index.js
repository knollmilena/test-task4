// 1. Fetch API — Случайные пользователи
const list = document.getElementById("list");

async function fetchRandomUsers() {
  let loadingTimeout;
  const errorMessage = document.createElement("div");
  errorMessage.textContent = "Загрузка данных... Пожалуйста, подождите.";
  list.appendChild(errorMessage);

  try {
    loadingTimeout = setTimeout(() => {}, 5000);

    const res = await fetch("https://randomuser.me/api/?results=10");
    if (!res.ok) {
      throw new Error("Не удалось загрузить пользователей");
    }

    const data = await res.json();
    return data.results;
  } catch (e) {
    console.error(e);
    errorMessage.textContent = "Не удалось загрузить пользователей.";
  } finally {
    clearTimeout(loadingTimeout);
    errorMessage.remove();
  }
}

function createUserItem(user) {
  const userItem = document.createElement("li");
  const pName = document.createElement("p");
  const pEmail = document.createElement("p");
  const img = document.createElement("img");

  img.src = user.picture.medium;
  pName.textContent = user.name.first;
  pEmail.textContent = user.email;

  userItem.classList.add("user-item");
  pEmail.classList.add("name");
  pName.classList.add("email");

  userItem.appendChild(img);
  userItem.appendChild(pName);
  userItem.appendChild(pEmail);

  return userItem;
}

const users = await fetchRandomUsers();

users.forEach((user) => {
  console.log(user);
  const userItem = createUserItem(user);
  list.appendChild(userItem);
});
