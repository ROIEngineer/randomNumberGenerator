const button = document.getElementById("button");
const reset = document.getElementById("reset");

button.addEventListener("click", () => {
  const min = Math.ceil(Number(document.getElementById("min").value));
  const max = Math.floor(Number(document.getElementById("max").value));

  const random = Math.floor(Math.random() * (max - min + 1) + min);
});
