import "./forgot-form.scss";
import React, { useState } from "react";

const FormForgot = () => {
  // form
  const [email, setEmail] = useState("");

  // form-validation
  const [emailError, setEmailError] = useState(false);

  // utils
  const isButtonDisabled = () => {
    return email.trim() === "" || emailError;
  };

  return (
    <div className="form-login">
      <div className="introduction">
        <h2 className="title-form">Redefinição de senha</h2>
        <p>Insira o email cadastrado para enviarmos um link de redefinição de senha.</p>
      </div>

      <form className="container">
        <div className="d-flex flex-column gap-1">
          <input
            className={`form-control ${emailError ? "input-error" : ""}`}
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email));
            }}
            onBlur={() => {
              setEmailError(email.trim() === "");
            }}
          />

          {emailError && <p className="label-error">{email.trim() === "" ? "Este campo é obrigatório" : "Formato de e-mail inválido"}</p>}
        </div>

        <button type="submit" className="btn btn-primary btn-auth w-100" disabled={isButtonDisabled()}>
          Enviar link de redefinição
        </button>
      </form>
    </div>
  );
};

export default FormForgot;
