const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const h1 = document.getElementById("h1");
const reset = document.querySelector("#reset");

function myFun() {
  if (h1.textContent < 0) {
    h1.style.color = "red";
  } else if (h1.textContent > 0) {
    h1.style.color = "green";
  } else {
    h1.style.color = "black";
  }
}

minus.addEventListener("click", () => {
  h1.textContent--;
  myFun();
})
plus.addEventListener("click", () => {
  h1.textContent++;
  myFun();
});

reset.addEventListener("click", () => {
  h1.textContent = 0;
  return h1.style.color = "black"
});
