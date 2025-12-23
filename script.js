const bouton = document.getElementById("contactBtn");
const contact = document.getElementById("contactInfo");

bouton.addEventListener("click", () => {
  contact.textContent = "Contact : odilon@email.com";
});