function changeSmoothie(fruit) {
  const bowls = document.getElementById("bowls");
  const body = document.querySelector("body");
  const circle = document.getElementById("circle");

  bowls.classList = "";
  bowls.classList.add(fruit);

  body.style.backgroundColor = `var(--${fruit}-background)`;
  circle.style.backgroundColor = `var(--${fruit}-circle)`;
}
