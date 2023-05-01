const navItems = document.querySelectorAll(".nav-item");

// window.addEventListener("hashchange", () => {
//   navItems.forEach((item) => {
//     const link = item.querySelector("a").getAttribute("href");
//     if (link === window.location.hash) {
//       item.classList.add("active");
//     } else {
//       item.classList.remove("active");
//     }
//   });
// });

window.addEventListener("scroll", () => {
  navItems.forEach((item) => {
    const link = item.querySelector("a").getAttribute("href");
    const target = document.querySelector(link);
    const pixel = 480;
    if (target.getBoundingClientRect().top <= pixel && target.getBoundingClientRect().bottom >= pixel) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});
