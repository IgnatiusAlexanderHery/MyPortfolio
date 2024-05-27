import React from "react";
import { Footer } from "./Components/Footer/Footer";
import DarkModeButton from "./Utils/DarkMode/DarkModeButton";
import { GridContainer } from "./Utils/GridLayout/GridContainer";
import { Header, ScrollTo } from "./Components/Header/Header";
import { getGridData } from "./API/GetData";
import { ArrowDown } from "./Utils/Icons/Icons";
import { ContactForm } from "./Components/ContactForm/ContactForm";

function App() {
  const GridDatas = getGridData();

  return (
    <div className="App scroll-smooth">
      <DarkModeButton />
      <Header />
      <main className="main ">
        <section id="Hero" className="min-h-screen bg-cover w-full h-screen text-black">
          <div className="relative h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: "url(MyPortfolio/img/Hero.jpg)" }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">Ignatius Alexander Hery</h1>
              <a className="mt-8 p-4 bg-transparent text-black rounded-full" href="#About" onClick={ScrollTo}>
                <ArrowDown />
              </a>
            </div>
          </div>
        </section>
        <section id="About" className="min-h-screen pt-16 2xl:max-w-screen-2xl mx-auto 2xl:min-h-min">
          <GridContainer GridDatas={GridDatas} />
        </section>
        <section id="Contact" className="py-16 2xl:max-w-screen-2xl mx-auto">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
