import React from "react";
import Button from "../button/button";
import "./form.styles.scss";

const Form = () => {
  handleSubmit = () => {};
  return (
    <div>
      <h1>Formulario</h1>
      <form className="form" onSubmit={handleSubmit}></form>
    </div>
  );
};

export default Form;
