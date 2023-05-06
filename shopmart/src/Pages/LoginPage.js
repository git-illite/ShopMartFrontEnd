import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const LoginPage = () => {
  return (
    <>
      <Header />
      <section id="login-section">
        <div className="RegContainer">
          <h1 style={{color:"white"}}>Login</h1>

          <form action="">
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" />
            </div>

            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input type="text" id="password" />
            </div>

            <div className="form-control">
              <button className="btn" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LoginPage;
