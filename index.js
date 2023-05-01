const navItems = document.querySelectorAll(".nav-item");

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

document.getElementById("btnSwitch").addEventListener("click", () => {
  const btnSwitch = document.getElementById("btnSwitch");
  if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
    // if dark -> change light
    document.documentElement.setAttribute("data-bs-theme", "light");
    btnSwitch.classList.remove("btn-light");
    btnSwitch.classList.add("btn-dark");
    const moonIcon = document.querySelector(".bi-moon-fill");
    moonIcon.setAttribute("class", "bi bi-moon");
  } else {
    // if light -> change dark
    document.documentElement.setAttribute("data-bs-theme", "dark");
    btnSwitch.classList.remove("btn-dark");
    btnSwitch.classList.add("btn-light");
    const moonIcon = document.querySelector(".bi-moon");
    moonIcon.setAttribute("class", "bi bi-moon-fill");
  }
});
