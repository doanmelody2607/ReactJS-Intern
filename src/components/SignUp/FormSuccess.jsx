import React from "react";
import SuccessImage from "../../images/form-success-01.svg";

const FormSuccess = () => {
  return (
    <div className="form-content-right">
      <div className="form-success">Congratulations!!!</div>
      <img src={SuccessImage} alt="success-image" className="form-img-2" />
    </div>
  );
};

export default FormSuccess;
