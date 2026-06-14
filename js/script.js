document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(".nav-link");
  const backToTop = document.getElementById("backToTop");
  const contactButton = document.querySelector(".contact-button");
  const revealItems = document.querySelectorAll(".reveal");

  navbarLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      const navbarMenu = document.getElementById("navbarMenu");
      const bootstrapCollapse = typeof bootstrap !== "undefined"
        ? bootstrap.Collapse.getInstance(navbarMenu)
        : null;

      if (bootstrapCollapse) {
        bootstrapCollapse.hide();
      }
    });
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > 350) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  if (contactButton) {
    contactButton.addEventListener("click", function () {
      alert("Terima kasih! Aplikasi email akan dibuka untuk mengirim pesan.");
    });
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.16
  });

  revealItems.forEach(function (item) {
    observer.observe(item);
  });
});
