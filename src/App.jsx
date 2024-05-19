import React from "react";
import { Footer } from "./Components/Footer/Footer";
import DarkModeButton from "./Utils/DarkMode/DarkModeButton";
import { useEffect } from "react";
import { GridContainer } from "./Utils/GridLayout/GridContainer";
import { Header } from "./Components/Header/Header";

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

  const GridDatas = [
    {
      title: "Title 1",
      text: "Text 1",
      image: "https://via.placeholder.com/150",
      alt: "Alt 1",
      repository: "https://github.com",
      live: "https://github.com",
      x: 0,
      y: 0,
      w: 1,
      h: 1,
    },
    {
      title: "Title 1",
      text: "Text 1",
      image: "https://via.placeholder.com/150",
      alt: "Alt 1",
      repository: "https://github.com",
      live: "https://github.com",
      x: 1,
      y: 0,
      w: 1,
      h: 1,
    },
    {
      title: "Title 1",
      text: "Text 1",
      image: "https://via.placeholder.com/150",
      alt: "Alt 1",
      repository: "https://github.com",
      live: "https://github.com",
      x: 2,
      y: 0,
      w: 1,
      h: 1,
    },
    {
      title: "Title 1",
      text: "Text 1",
      image: "https://via.placeholder.com/150",
      alt: "Alt 1",
      repository: "https://github.com",
      live: "https://github.com",
      x: 3,
      y: 0,
      w: 1,
      h: 1,
    },
    {
      title: "Title 1",
      text: "Text 1",
      image: "https://via.placeholder.com/150",
      alt: "Alt 1",
      repository: "https://github.com",
      live: "https://github.com",
      x: 4,
      y: 0,
      w: 1,
      h: 1,
    },
    {
      title: "Title 1",
      text: "Text 1",
      image: "https://via.placeholder.com/150",
      alt: "Alt 1",
      repository: "https://github.com",
      live: "https://github.com",
      x: 5,
      y: 0,
      w: 1,
      h: 1,
    },
  ];

  return (
    <div className="App scroll-smooth">
      <DarkModeButton />
      <Header />
      <main className="main">
        <section id="Home" className="min-h-screen pt-16">
          <GridContainer GridDatas={GridDatas} />
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
