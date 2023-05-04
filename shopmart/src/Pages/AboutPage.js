import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const AboutPage = () => {
  return (
    <>
      <Header />
      <main>
        <section id="about-section">
          <div className="container">
            <h1>About Page</h1>

            <p>
              My name is <b>Abdalla Aden</b>. I graduated from the Seneca College Computer Programming and Analysis Program. As an aspiring software developer, 
              I am excited to showcase my skills through this project - a portfolio website built using React. 
              This website serves as a platform for me to highlight my programming projects and technical abilities. I hope I demonstrated my proficiency in modern web development 
              technologies and design principles. With a passion for building intuitive and visually 
              appealing user interfaces, I strive to create engaging digital experiences that solve real-world problems.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
