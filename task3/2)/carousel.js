const urls = ["./images/cat.jpeg", "./images/two.jpeg", "./images/cute.jpeg"];
const buttons = document.getElementsByTagName("button");
const img = document.getElementById("img");

let i = 0;
img.src = urls[i];

// листаем карусель вперед
nextImg = () => {
  i++;
  if (i === 3) i = 0;
  img.src = urls[i];
};

// листаем карусель назад
prevImg = () => {
  if (i === 0) i = 2;
  img.src = urls[i];
  i--;
};

setInterval(nextImg, 3000);

for (const button of buttons) {
  button.addEventListener("click", (e) => {
    if (e.target.classList.value === "right") {
      nextImg();
    } else if (e.target.classList.value === "left") {
      prevImg();
    }
  });
}
