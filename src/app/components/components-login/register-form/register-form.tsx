import "./register-form.scss";
import React, { useState } from "react";
import InputMask from "react-input-mask";

import { useDispatch, useSelector } from "react-redux";
import { selectStepRegister } from "@/app/shared/store/selectors/auth.selectors";
import { stepRegister } from "@/app/shared/store/actions/auth.actions";

const FormRegister = () => {
  const dispatch = useDispatch();
  const state = useSelector(selectStepRegister);

  // form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // form-validation
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [matchError, setMatchError] = useState(false);

  // utils
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);

  const isButtonDisabled = () => {
    if (state === 0) {
      return !name.trim() || nameError || !email.trim() || emailError || !phone.trim() || phoneError;
    } else if (state === 1) {
      return !password.trim() || password.length < 8 || !confirmPassword.trim() || matchError;
    }
    return true;
  };

  const viewPassword = (action: string) => {
    if (action === "password") {
      setShowPassword(!showPassword);
    } else {
      setshowConfirmPassword(!showConfirmPassword);
    }
  };

  const initRegister = (e: any) => {
    e.preventDefault();

    if (state === 0) {
      dispatch(stepRegister(1));
      return;
    }
  };

  return (
    <div className="form-login">
      <h2 className="title-form">Crie sua conta</h2>

      <form className="container" onSubmit={initRegister}>
        {state === 0 && (
          <div className="form-group">
            {/* name */}
            <div className="d-flex flex-column gap-1">
              <input
                className={`form-control ${nameError ? "input-error" : ""}`}
                type="text"
                id="name"
                placeholder="Nome"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                onBlur={() => {
                  setNameError(name.trim() === "");
                }}
              />

              {nameError && <p className="label-error">* Este campo é obrigatório</p>}
            </div>

            {/* email */}
            <div className="d-flex flex-column gap-1">
              <input
                className={`form-control ${emailError ? "input-error" : ""}`}
                type="text"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onBlur={() => {
                  setEmailError(email.trim() === "" || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email));
                }}
              />

              {emailError && <p className="label-error">{email.trim() === "" ? "Este campo é obrigatório" : "Formato de e-mail inválido"}</p>}
            </div>

            {/* phone */}
            <div className="d-flex flex-column gap-1">
              <InputMask
                className={`form-control ${phoneError ? "input-error" : ""}`}
                type="tel"
                id="phone"
                mask="(99) 9 9999-9999"
                maskChar={null}
                placeholder="Celular"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                onBlur={() => {
                  const isComplete = phone.replace(/[\s()-]/g, "").length === 11;
                  setPhoneError(phone.trim() === "" || !isComplete);
                }}
              />

              {phoneError && <>{phone.trim() === "" ? <p className="label-error">* Este campo é obrigatório</p> : <p className="label-error">* Formato do telefone inválido</p>}</>}
            </div>
          </div>
        )}

        {state === 1 && (
          <>
            <div className="form-group">
              {/* password */}
              <div className="position-relative">
                <input
                  className={`form-control`}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (confirmPassword && confirmPassword !== e.target.value) {
                      setMatchError(true);
                    } else {
                      setMatchError(false);
                    }
                  }}
                />

                <button
                  type="button"
                  className="btn btn-password"
                  onClick={() => {
                    viewPassword("password");
                  }}
                >
                  <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye-fill"}`}></i>
                </button>
              </div>

              {/* confirm-password */}
              <div className="position-relative">
                <input
                  className={`form-control`}
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                  placeholder="Confirme sua senha"
                  value={confirmPassword}
                  disabled={!password.length}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    if (password !== e.target.value) {
                      setMatchError(true);
                    } else {
                      setMatchError(false);
                    }
                  }}
                />

                <button
                  type="button"
                  className="btn btn-password"
                  onClick={() => {
                    viewPassword("confirm-password");
                  }}
                >
                  <i className={`bi ${showConfirmPassword ? "bi-eye-slash" : "bi-eye-fill"}`}></i>
                </button>
              </div>

              {matchError && <p className="label-error">As senhas não conferem.</p>}
            </div>

            <div className="card-instruction">
              <div className="d-center gap-2">
                <i className="bi bi-info-circle"></i>
                <p className="fw-semibold">Importante</p>
              </div>

              <ul className="list-instruction">
                <li>
                  <article>A senha deve ser uma combinação de 8 caracteres contendo: letras maiúsculas e minúsculas, números e caracteres especiais.</article>
                </li>
              </ul>
            </div>
          </>
        )}

        <button type={state === 0 ? "button" : "submit"} className="btn btn-primary btn-auth w-100" disabled={isButtonDisabled()} onClick={(event: any) => initRegister(event)}>
          {state === 0 ? "Prosseguir" : "Criar conta"}
        </button>
      </form>
    </div>
  );
};

export default FormRegister;
