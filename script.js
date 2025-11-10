//projects//
 const buttons = document.querySelectorAll(".details-btn");
 buttons.forEach(button =>{
 button.addEventListener("click", () => {
 const details = button.nextElementSibling;
 const isHidden = details.style.display === "none";
 details.style.display = isHidden ? "block" : "none";
 button.textContent = isHidden ? "Hide Details" : "Show Details";
 });
 });
 //contact//
 const form = document.getElementById("contactProcess");
 const message = document.getElementById("formMessage");
 form.addEventListener("submit", (e) => {
    e.preventDefault();
 const name = form.name.value.trim();
 const email = form.email.value.trim();
 const msg = form.message.value.trim();
 if (!name || !email || !msg) {
 message.textContent = "Ensure all fields are filled.";
 message.style.color = "red";
 return;
 }

 if (!/\S+@\S+\.\S+/.test(email)) {
  message.textContent = "Invalid email address.";
  message.style.color = "red";
  return;
 }

  message.textContent = "We will get back to you soon!";
  message.style.color = "green";
  form.reset();
});
