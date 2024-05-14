import "./login-form.scss";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { stepAuth } from "@/app/shared/store/actions/auth.actions";

const FormLogin = () => {
  const dispatch = useDispatch();

  // form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // form-validation
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const register = () => {
    dispatch(stepAuth("register"));
  };

  const forgot = () => {
    dispatch(stepAuth("forgot"));
  };

  const isButtonDisabled = () => {
    return email.trim() === "" || password.trim() === "" || emailError || passwordError;
  };

  return (
    <div className="form-login">
      <h2 className="title-form">Entre em sua conta</h2>

      <form action="">
        <div className="form-group">
          <div className="d-flex flex-column">
            <input
              className={`form-control`}
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
            <div className="w-100 text-left">{emailError && <p className="label-error mt-2">{email.trim() === "" ? "* Este campo é obrigatório" : "* Formato de e-mail inválido"}</p>}</div>
          </div>

          <div className="d-flex flex-column align-items-end">
            <input
              className={`form-control`}
              type="text"
              id="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(password.trim().length < 6);
              }}
            />
            <div className="w-100 text-left">{passwordError && <p className="label-error mt-2">* A senha possui no mínimo 6 caracteres</p>}</div>

            <button type="button" className="btn btn-forgot" onClick={() => forgot()}>
              Esqueceu a senha?
            </button>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-auth w-100" disabled={isButtonDisabled()}>
          Entrar
        </button>
      </form>

      <p className="no-account">
        Ainda não tem uma conta?{" "}
        <button type="button" className="btn btn-forgot m-0" onClick={() => register()}>
          Cadastre-se aqui
        </button>
      </p>
    </div>
  );
};

export default FormLogin;
