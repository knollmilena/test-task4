// Задание 2

const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");

function createListItem(text) {
  const listItem = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  const check = document.createElement("input");
  check.type = "checkbox";

  span.textContent = text;
  button.textContent = "Удалить";

  listItem.classList.add("list-item");
  span.classList.add("task-text");
  button.classList.add("delete-button");
  check.classList.add("checkbox");

  listItem.appendChild(check);
  listItem.appendChild(span);
  listItem.appendChild(button);

  return listItem;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const listItem = createListItem(input.value.trim());
  list.appendChild(listItem);
  input.value = "";
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-button")) {
    const listItem = e.target.closest(".list-item");
    listItem.remove();
  }
  if (e.target.classList.contains("checkbox")) {
    const span = e.target.nextElementSibling;
    if (e.target.checked) {
      span.classList.add("completed");
    } else {
      span.classList.remove("completed");
    }
  }
});
