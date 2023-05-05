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
  const body = document.body;
  const card = document.querySelectorAll(".card");

  body.style.transition = "1s";
  card.forEach((card) => {
    card.style.transition = "1s";
  });

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

// Mendapatkan elemen gambar dan modal
const Image = document.querySelectorAll("img");
const modal = document.querySelector("#modal");
const modalImg = document.querySelector("#modalImg");
const navElements = document.querySelectorAll("nav");

// Menambahkan event listener ke setiap gambar
Image.forEach(function (Image) {
  Image.addEventListener("click", function () {
    modal.style.display = "flex";
    modalImg.src = this.src;
    modalImg.classList = this.classList;
    modalImg.style.maxHeight = "80%";
    modalImg.style.maxWidth = "80%";
    modalImg.style.margin = "auto";
    modalImg.style.display = "block";
    navElements.forEach(function (navElement) {
      navElement.style.zIndex = "1";
    });
  });
});

// Saat overlay diklik, sembunyikan modal
modal.addEventListener("click", function () {
  modal.style.display = "none";
  navElements.forEach(function (navElement) {
    navElement.style.zIndex = null;
  });
});
