const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const phone = form.querySelector('input[type="tel"]').value;
  const design = form.querySelector("select").value;
  const message = form.querySelector("textarea").value;

  const whatsappMessage =
    `Hello Jayashri Aari Work 👋\n\n` +
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Mobile: ${phone}\n` +
    `Design: ${design}\n` +
    `Message: ${message}`;

  const whatsappNumber = "917620535309";

  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=` +
    encodeURIComponent(whatsappMessage);

  window.open(whatsappURL, "_blank");

  form.reset();
});