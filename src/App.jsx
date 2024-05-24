import React from "react";
import { Footer } from "./Components/Footer/Footer";
import DarkModeButton from "./Utils/DarkMode/DarkModeButton";
import { GridContainer } from "./Utils/GridLayout/GridContainer";
import { Header } from "./Components/Header/Header";
import getGridData from "./API/GetData";

function App() {
  const GridDatas = getGridData();

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
