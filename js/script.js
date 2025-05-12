const navbar = document.getElementById("navbar");
const mobileMenu = document.querySelector(".mobile__menu-list__wrapper");
const hamburger = document.querySelector("#hamburger");

// To know an element is in Viewport
const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom >= 0 &&
    rect.left < window.innerWidth &&
    rect.right >= 0
  );
};

hamburger.addEventListener("click", function () {
  if (hamburger.classList.contains("fa-bars")) {
    mobileMenu.classList.add("show");
    hamburger.classList.add("fa-times");
    hamburger.classList.remove("fa-bars");
  } else if (hamburger.classList.contains("fa-times")) {
    mobileMenu.classList.remove("show");
    hamburger.classList.remove("fa-times");
    hamburger.classList.add("fa-bars");
  }
});

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
  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
    mobileMenu.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    mobileMenu.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const progressArray = document.querySelectorAll(".skill__progress");
  progressArray[0].style.width = "100%";
  progressArray[1].style.width = "90%";
  progressArray[2].style.width = "80%";
  progressArray[3].style.width = "65%";
});

const updateContainer = () => {
  const width = window.innerWidth;
  const containers = document.querySelectorAll(".container");

  for (let x = 0; x < containers.length; x++) {
    const container = containers[x];
    if (width >= 1400) {
      container.classList.remove(
        "container-xxl",
        "container-xl",
        "container-lg",
        "container-md",
        "container-sm",
        "container-vsm"
      );
      container.classList.add("container-xxl");
    } else if (width <= 1399 && width >= 1200) {
      container.classList.remove(
        "container-xxl",
        "container-xl",
        "container-lg",
        "container-md",
        "container-sm",
        "container-vsm"
      );
      container.classList.add("container-xl");
    } else if (width <= 1199 && width >= 992) {
      container.classList.remove(
        "container-xxl",
        "container-xl",
        "container-lg",
        "container-md",
        "container-sm",
        "container-vsm"
      );
      container.classList.add("container-lg");
    } else if (width <= 991 && width >= 768) {
      container.classList.remove(
        "container-xxl",
        "container-xl",
        "container-lg",
        "container-md",
        "container-sm",
        "container-vsm"
      );
      container.classList.add("container-md");
    } else if (width <= 767 && width >= 576) {
      container.classList.remove(
        "container-xxl",
        "container-xl",
        "container-lg",
        "container-md",
        "container-sm",
        "container-vsm"
      );
      container.classList.add("container-sm");
    } else if (width <= 575) {
      container.classList.remove(
        "container-xxl",
        "container-xl",
        "container-lg",
        "container-md",
        "container-sm",
        "container-vsm"
      );
      container.classList.add("container-vsm");
    }
  }
};

window.addEventListener("resize", updateContainer);
document.addEventListener("DOMContentLoaded", updateContainer);
document.addEventListener("load", updateContainer);

// Filter Portfolio-items
const filter = (type) => {
  // const parent = document.querySelector(".portfolio-showcase");
  const items = document.querySelectorAll(".portfolio-content");

  for (let x = 0; x < items.length; x++) {
    const item = items[x];
    item.classList.remove("hidden");
    item.classList.remove("show");
  }

  if (type === "all") {
    for (let x = 0; x < items.length; x++) {
      const item = items[x];
      item.classList.remove("hidden");
      item.classList.add("show");
      // item.style.display = "block";
    }
    return;
  }

  for (let x = 0; x < items.length; x++) {
    const item = items[x];
    if (item.getAttribute("data-type") === type) {
      if (!item.classList.contains("hidden")) {
        item.classList.remove("hidden");
        item.classList.add("show");
        // item.style.display = "block";
      }
    } else if (item.getAttribute("data-type") !== type) {
      if (!item.classList.contains("hidden")) {
        item.classList.add("hidden");
        item.classList.remove("show");
      }
    }

    // return;

    // item.getAttribute("data-type") === type
    //   ? item.classList.add("show")
    //   : item.classList.remove("show");
  }
};

document
  .querySelector(".portfolio-nav")
  .addEventListener("click", function (event) {
    const links = document.querySelectorAll(".portfolio-nav-link");

    if (!event.target.classList.contains("portfolio-nav-link")) {
      return;
    }

    if (event.target.getAttribute("filter") === "all") {
      for (let x = 0; x < links.length; x++) {
        const link = links[x];
        link.classList.remove("active");
      }
      event.target.classList.add("active");
      return filter("all");
    } else if (event.target.getAttribute("filter") === "app") {
      for (let x = 0; x < links.length; x++) {
        const link = links[x];
        link.classList.remove("active");
      }
      event.target.classList.add("active");
      return filter("app");
    } else if (event.target.getAttribute("filter") === "books") {
      for (let x = 0; x < links.length; x++) {
        const link = links[x];
        link.classList.remove("active");
      }
      event.target.classList.add("active");
      return filter("books");
    } else if (event.target.getAttribute("filter") === "branding") {
      for (let x = 0; x < links.length; x++) {
        const link = links[x];
        link.classList.remove("active");
      }
      event.target.classList.add("active");
      return filter("branding");
    } else if (event.target.getAttribute("filter") === "product") {
      for (let x = 0; x < links.length; x++) {
        const link = links[x];
        link.classList.remove("active");
      }
      event.target.classList.add("active");
      return filter("product");
    }
  });

document.addEventListener("DOMContentLoaded", filter("all"));

// Accordion functionality
const questionsContainer = document.querySelector(".questions-container");

questionsContainer.addEventListener("click", (event) => {
  if (!event.target.classList.contains("toggler")) {
    return;
  }

  if (event.target.classList.contains("toggler")) {
    const toggler = event.target;
    const accordion = event.target.parentElement.parentElement;
    const question = event.target.parentElement.children[0];

    if (toggler.classList.contains("fa-chevron-right")) {
      accordion.classList.remove("collapse");
      question.classList.add("text-primary");
      toggler.classList.remove("fa-chevron-right");
      toggler.classList.add("fa-chevron-down");
    } else if (toggler.classList.contains("fa-chevron-down")) {
      accordion.classList.add("collapse");
      question.classList.remove("text-primary");
      toggler.classList.remove("fa-chevron-down");
      toggler.classList.add("fa-chevron-right");
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const statsContainer = document.querySelector(".stats-grid.container");

  window.addEventListener("scroll", () => {
    if (isInViewport(statsContainer)) {
      const counterUp = window.counterUp.default;

      const callback = (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting && !el.classList.contains("is-visible")) {
            counterUp(el, {
              duration: 6000,
              delay: 1,
            });
            el.classList.add("is-visible");
          }
        });
      };

      const IO = new IntersectionObserver(callback, { threshold: 1 });

      const els = document.querySelectorAll(".client-counter");
      for (let x = 0; x < els.length; x++) {
        const el = els[x];
        IO.observe(el);
      }
    } else {
      return;
    }
  });
});
