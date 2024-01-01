const outerBox = document.querySelector(".box");
const innerbox = document.querySelector(".innerbox");

let counter = 0;
innerbox.addEventListener("click", function () {
  counter++;

  if (counter % 2 == 0) {
    innerbox.style.left = 42 + "px";
    document.body.style.backgroundColor = "black";
    innerbox.style.border = "2px solid white";
    outerBox.style.border = "2px solid white";
  } else {
    innerbox.style.left = "";
    document.body.style.backgroundColor = "white";
    innerbox.style.border = "2px solid black";
    outerBox.style.border = "2px solid black";
  }
});
