import React, { useEffect } from "react";

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

  function ScrollTo(e) {
    e.preventDefault();
    const target = e.target.getAttribute("href")?.replace("#", "");
    const targetElement = document.getElementById(String(target));
    window.scrollTo({
      top: targetElement.offsetTop,
    });
  }

  return (
    <nav className="navbar shadow-sm bg-blue-400 dark:bg-blue-800 sticky top-0 z-10">
      <div className="flex justify-between p-5">
        <a href=" ">Ignatius Alexander Hery</a>
        <div className="">
          <ul className="flex justify-evenly gap-4">
            <li className="nav-item">
              <a href="#Home" onClick={ScrollTo}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#About" onClick={ScrollTo}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#Projects" onClick={ScrollTo}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#Contact" onClick={ScrollTo}>
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
