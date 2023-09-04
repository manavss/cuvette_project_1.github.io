const formTitle = document.getElementById("form-title");
const thankyou = document.getElementById("thank-you");
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.style.display = "none";
  formTitle.style.display = "none";
  thankyou.style.display = "block";
});
