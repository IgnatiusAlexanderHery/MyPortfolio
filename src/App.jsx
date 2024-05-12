import React from "react";
import { Footer } from "./Components/Footer/Footer";
import DarkModeButton from "./Utils/DarkMode/DarkModeButton";
import { useEffect } from "react";

function App() {
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
    <div className="App scroll-smooth">
      <DarkModeButton />
      <nav className="navbar shadow-sm bg-blue-400 dark:bg-blue-800 sticky top-0">
        <div className="flex justify-between p-5">
          <a href="/">Ignatius Alexander Hery</a>
          <div className="">
            <ul className="flex justify-evenly gap-4">
              <li className="nav-item">
                <a href="#Home">Home</a>
              </li>
              <li className="nav-item">
                <a href="#About">About</a>
              </li>
              <li className="nav-item">
                <a href="#Projects">Projects</a>
              </li>
              <li className="nav-item">
                <a href="#Contact">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="main">
        <section id="Home" className="min-h-screen pt-16">
          Home
        </section>
        <section id="About" className="min-h-screen pt-16">
          About
        </section>
        <section id="Projects" className="min-h-screen pt-16">
          Projects
        </section>
        <section id="Contact" className="min-h-screen pt-16">
          Contact Me
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
