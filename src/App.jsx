import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Astro from "./components/Pages/Astro/Astro";
import Landscape from "./components/Pages/Landscape/Landscape";
import Timelapse from "./components/Pages/Timelapse/Timelapse";
import Shop from "./components/Pages/Shop/Shop";
import Gear from "./components/Pages/Gear/Gear";
import About from "./components/Pages/About/About";
import "./App.css";

function App() {
  window.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting) {
          document
            .querySelector(`ul li a[href="#${id}"]`)
            .parentElement.classList.add("active");
        } else {
          document
            .querySelector(`ul li a[href="#${id}"]`)
            .parentElement.classList.remove("active");
        }
      });
    });

    document.querySelectorAll("section[id]").forEach(section => {
      observer.observe(section);
    });
  });

  return (
    <>
      <Navbar />
      <div className="contentWrapper">
        <Home />
        <Astro />
        <Landscape />
        <Timelapse />
        <Shop />
        <Gear />
        <About />
      </div>
    </>
  );
}

export default App;
