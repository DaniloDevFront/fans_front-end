"use client";
import "./modal-auth.scss";

import React, { useState } from "react";

import FormLogin from "../../components-login/login-form/login-form";
import FormRegister from "../../components-login/register-form/register-form";
import FormForgot from "../../components-login/forgot-form/forgot-form";
import { useSelector, useDispatch } from "react-redux";
import { selectStepAuth, selectStepRegister } from "@/app/shared/store/selectors/auth.selectors";
import HeroLogin from "../../components-login/hero-login/hero-login";
import { stepAuth, stepRegister } from "@/app/shared/store/actions/auth.actions";

const ModalAuth = () => {
  const dispatch = useDispatch();

  const stateAuth = useSelector(selectStepAuth);
  const stateRegister = useSelector(selectStepRegister);

  const [loading, setLoading] = useState(false);

  /**
   * Navega entre os estados de autenticação ou volta para a página inicial.
   * - Se estiver no login, retorna para a home.
   * - Se estiver no registro e no passo inicial, muda para o login.
   * - Se estiver no registro e no segundo passo, volta para o primeiro passo.
   */
  function goBack() {
    if (stateAuth === "login") {
      // to-do: return to home
    } else if (stateAuth === "register") {
      registerBack();
    } else if (stateAuth === "forgot") {
      dispatch(stepAuth("login"));
    }
  }

  /**
   * Manipula a lógica de navegação para trás dentro do estado de registro.
   */
  function registerBack() {
    if (stateRegister === 0) {
      dispatch(stepAuth("login"));
    } else if (stateRegister === 1) {
      dispatch(stepRegister(0));
    }
  }

  return (
    <div className="modal fade" id="modal-auth" tabIndex={-1} aria-labelledby="modal-auth-label" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          {!loading && (
            <>
              <div className="modal-content-header d-center">
                {(stateAuth === "register" || stateAuth === "forgot") && (
                  <button
                    className="btn btn-return"
                    onClick={() => {
                      goBack();
                    }}
                  >
                    <i className="bi bi-arrow-left-short"></i>
                  </button>
                )}

                <button data-bs-dismiss="modal" className="btn-close"></button>
              </div>

              <div className="modal-content-body">
                <HeroLogin />

                {stateAuth === "login" && <FormLogin />}
                {stateAuth === "register" && <FormRegister />}
                {stateAuth === "forgot" && <FormForgot />}
              </div>
            </>
          )}

          {loading && <div className="spinner"></div>}
        </div>
      </div>
    </div>
  );
};

export default ModalAuth;
