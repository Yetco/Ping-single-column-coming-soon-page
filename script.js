const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.querySelector(".email");
  const emailValue = email.value;
  const jsMessage = document.querySelector(".js-email-message");

  if (emailValue === "") {
    email.style.borderColor = "red";
    jsMessage.innerHTML = "Please provide a valid email address";
  } else if (!emailValue.includes("@") || emailValue.includes("/")) {
    email.style.color = "red";
    jsMessage.innerHTML = "Please provide a valid email address";
  } else {
    email.style.borderColor = "#51cc00";
    email.style.color = "";
    jsMessage.innerHTML = "";
  }
});
