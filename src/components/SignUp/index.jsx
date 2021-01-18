import React, { useState } from "react";
import SignupImage from "../../images/mercedes-gls-450.png";
import "./Form.scss";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="form-container">
        <span className="close-btn">x</span>
        <div className="form-content-left">
          <img
            src={SignupImage}
            alt="spaceship"
            className="form-img  img-fluid"
          />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default SignUp;
