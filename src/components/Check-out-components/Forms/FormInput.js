import React from "react";

const FormInput = ({ type, label, placeholder, className }) => {
  return (
    <>
      <label>{label}</label>
      <br />
      <br />
      <input className={className} type={type} placeholder={placeholder} />
    </>
  );
};

export default FormInput;
