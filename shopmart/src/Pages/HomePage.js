import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ResortList from "../Components/ResortList";
import Hero from "../Components/Hero";

const HomePage = () => {
  return (
    <div className="grid grid-row-3" id="main-container">
      <Header />
      <main>
        <Hero />
        <ResortList />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
