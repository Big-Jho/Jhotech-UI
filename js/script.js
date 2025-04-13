document.addEventListener("DOMContentLoaded", function () {
  const typingContainer = document.querySelector(".hero__typewriter");

  const typewriter = new Typewriter(typingContainer, {
    loop: true,
    autoStart: true,
  });

  typewriter
    .typeString("Web Developer!")
    .pauseFor(2500)
    .deleteChars(11)
    .typeString(" Designer!")
    .pauseFor(2500)
    .deleteAll()
    .typeString("A Pharmacist-in-making!")
    .pauseFor(2500)
    .deleteAll()
    .typeString("Graphics Designer!")
    .pauseFor(2500)
    .deleteAll()
    .start();
});

document.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
