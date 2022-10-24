document.querySelector(".year").textContent = new Date().getFullYear();

const btnNaEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNaEl.addEventListener("click", function (event) {
  event.preventDefault();
  headerEl.classList.toggle("nav-open");
});

//** Smooth scrolling animation*****  */

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const href = link.getAttribute("href");
    // console.log(href);
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
//** Sticky navigation******/

const observer = new IntersectionObserver(function () {}, {});
