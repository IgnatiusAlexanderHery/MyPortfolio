import React, { useEffect } from "react";

export function ScrollTo(e) {
  e.preventDefault();

  let targetElement = e.target;

  while (targetElement && targetElement.tagName !== "A") {
    targetElement = targetElement.parentElement;
  }

  const target = targetElement.getAttribute("href")?.replace("#", "");
  const targetElementById = document.getElementById(target);

  if (targetElementById) {
    window.scrollTo({
      top: targetElementById.offsetTop,
      behavior: "smooth",
    });
  }
}

export const Header = () => {
  useEffect(() => {
    const navItems = document.querySelectorAll(".nav-item");
    const handleScroll = () => {
      navItems.forEach((item) => {
        const link = item.querySelector("a").getAttribute("href");
        const target = document.querySelector(link);
        const pixel = 480;
        if (target.getBoundingClientRect().top <= pixel && target.getBoundingClientRect().bottom >= pixel) {
          item.classList.add("font-bold");
        } else {
          item.classList.remove("font-bold");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="navbar shadow-sm bg-gradient-to-r from-sky-200 via-blue-900 to-sky-200
    dark:from-blue-900 dark:via-sky-200 dark:to-blue-900 sticky top-0 z-10 dark:text-black text-white"
    >
      <div className="flex justify-center p-5">
        <ul className="flex justify-evenly gap-4">
          <li className="nav-item">
            <a href="#Hero" onClick={ScrollTo}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#About" onClick={ScrollTo}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#Contact" onClick={ScrollTo}>
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
