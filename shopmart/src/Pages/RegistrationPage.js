import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const RegistrationPage = () => {
  return (
    <>
      <Header />
      <section className="register-section">
        <div className="RegContainer">
          <h1 style={{color: "white"}}>Register</h1>

          <form action="">
            <div className="form-control">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" />
            </div>

            <div className="form-control">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" />
            </div>

            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" />
            </div>

            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input type="text" id="password" />
            </div>

            <div className="form-control">
              <label htmlFor="password">Confirm Password</label>
              <input type="text" id="password" />
            </div>

            <div className="form-control">
              <button className="btn" type="submit">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RegistrationPage;
