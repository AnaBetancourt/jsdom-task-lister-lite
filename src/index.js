document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    console.log(event.input)
    event.preventDefault();
  });
});
