// import Form from "./Form";

// const form = new Form();

const navbar = document.getElementById("navbar");
const mobileMenu = document.querySelector(".mobile__menu-list__wrapper");
const hamburger = document.querySelector("#hamburger");
const progressArray = document.querySelectorAll(".skill__progress");
const skillsContainer = document.querySelector(".about__skills");

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

// Filter Portfolio-items
const filter = (type) => {
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
    }
    return;
  }

  for (let x = 0; x < items.length; x++) {
    const item = items[x];
    if (item.getAttribute("data-type") === type) {
      if (!item.classList.contains("hidden")) {
        item.classList.remove("hidden");
        item.classList.add("show");
      }
    } else if (item.getAttribute("data-type") !== type) {
      if (!item.classList.contains("hidden")) {
        item.classList.add("hidden");
        item.classList.remove("show");
      }
    }
  }
};

// Hamburger menu display
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

// Typewriter effect
document.addEventListener("DOMContentLoaded", function () {
  const typingContainer = document.querySelector(".hero__typewriter");

  const typewriter = new Typewriter(typingContainer, {
    loop: true,
    autoStart: true,
  });

  typewriter
    .typeString("A Web Developer!")
    .pauseFor(3000)
    .deleteChars(11)
    .typeString(" Designer!")
    .pauseFor(3000)
    .deleteChars(13)
    .typeString("Pharmacist-in-a-bit!")
    .pauseFor(3000)
    .deleteChars(20)
    .typeString("Graphics Designer!")
    .pauseFor(3000)
    .deleteAll()
    .start();
});

// Transparent navbar background when scrolled
document.addEventListener("scroll", function () {
  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
    mobileMenu.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    mobileMenu.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const animationKeyframes = {
    move100: [
      {
        width: 0,
      },
      {
        width: "100%",
      },
    ],

    move90: [
      {
        width: 0,
      },
      {
        width: "90%",
      },
    ],
    move80: [
      {
        width: 0,
      },
      {
        width: "80%",
      },
    ],
    move65: [
      {
        width: 0,
      },
      {
        width: "65%",
      },
    ],
  };
  const increaseOptions = {
    iterations: 1,
    duration: 10000,
  };
  const increase100 = progressArray[0].animate(
    animationKeyframes.move100,
    increaseOptions
  );
  const increase90 = progressArray[1].animate(
    animationKeyframes.move90,
    increaseOptions
  );
  const increase80 = progressArray[2].animate(
    animationKeyframes.move80,
    increaseOptions
  );
  const increase65 = progressArray[3].animate(
    animationKeyframes.move65,
    increaseOptions
  );

  increase100.play();
  increase100.playbackRate = 1;

  increase90.play();
  increase90.playbackRate = 1;

  increase80.play();
  increase80.playbackRate = 1;

  increase65.play();
  increase65.playbackRate = 1;
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
  const durations = [200, 521, 1421, 20];

  window.addEventListener("scroll", () => {
    if (isInViewport(statsContainer)) {
      const counterUp = window.counterUp.default;

      const callback = (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting && !el.classList.contains("is-visible")) {
            counterUp(el, {
              duration: 2000,
              delay: 20,
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

document.getElementById("close-btn").addEventListener("click", () => {});
