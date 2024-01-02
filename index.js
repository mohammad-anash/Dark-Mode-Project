const layer = document.querySelector(".innerbox");
const plus = document.querySelector(".plus");
const minuse = document.querySelector(".minuse");
const percentage = document.querySelector(".percentage");

let count = 60;
let showPercentage;
plus.addEventListener("click", function () {
  count += 10;

  if (count > 200) {
    count = 200;
  }

  layer.style.width = `${count}px`;
  percentage.textContent = `${count}%`;
});

minuse.addEventListener("click", function () {
  count -= 10;

  if (count < 0) {
    count = 0;
  }

  layer.style.width = `${count}px`;
  percentage.textContent = `${count}%`;
});
