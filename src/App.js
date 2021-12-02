/** @format */
import React from "react";
import "./App.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/header/Header";
import Mainf from "./components/main/Main";
import About from "./components/about/about";
import Information from "./components/information/information";
import Contact from "./components/Contact/Contact";
import Details from "./components/details/Details";
import Footer from "./components/footer/Footer";
import Location from "./components/location/Location";
import Places from "./components/places/Places";
import Plans from "./components/plans/Plans";
import Work from "./components/work/Work";

function App() {
  AOS.init({
    duration: 2000,
    easing: "ease",
  });
  return (
    <div className="App">
      <Header />
      <Mainf />
      <Information />
      <About />
      <Places />
      <Plans />
      <Work />
      <Details />
      <Contact />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
