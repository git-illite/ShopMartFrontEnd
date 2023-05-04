import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const ResortDescriptionPage = () => {
  const [resort, setResort] = useState({
    title: "",
    photo: "",
    rentPrice: "",
    description: "",
  });

  const { id } = useParams();
  //console.log('id: ', id)
  const URL = `${process.env.REACT_APP_API_ENDPOINT}${id}`;
  useEffect(() => {
    console.log(URL);
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setResort(json.data);
        console.log("Resort found: ", resort);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="grid grid-row-3" id="main-container">
      <Header />

      <main>
        <section id="resort-description-section">
          <div className="container grid grid-col-4 grid-gap-2">
            <img src={resort.photo} alt="" />
            <div className="resort-description-content-area">
              <h2>{resort.title}</h2>
              <p>${resort.rentPrice} per night</p>
              <h3>Details</h3>
              <p>{resort.description}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResortDescriptionPage;
