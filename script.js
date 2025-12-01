document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Terima kasih, pesan Anda telah terkirim!");
  this.reset();
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
