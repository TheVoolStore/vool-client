import React from "react";

const FormHead = ({ title, link, linkText }) => {
  return (
    <span>
      <h4>{title}</h4>
      <a href={link}>{linkText}</a>
    </span>
  );
};

export default FormHead;
