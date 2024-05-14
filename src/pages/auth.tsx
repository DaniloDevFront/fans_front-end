import React from "react";
import { HeaderComponent } from "@/app/components/components-core";
import HeroLogin from "@/app/components/components-login/hero-login/hero-login";
import FormLogin from "@/app/components/components-login/login-form/login-form";

import { useDispatch, useSelector } from "react-redux";
import { selectStepAuth, selectStepRegister } from "@/app/shared/store/selectors/auth.selectors";
import FormRegister from "@/app/components/components-login/register-form/register-form";
import { stepAuth, stepRegister } from "@/app/shared/store/actions/auth.actions";
import FormForgot from "@/app/components/components-login/forgot-form/forgot-form";

const Auth = () => {
  const stateAuth = useSelector(selectStepAuth);
  const stateRegister = useSelector(selectStepRegister);

  const dispatch = useDispatch();

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
    <>
      <HeaderComponent
        slot_start={
          <button
            className="btn btn-return"
            onClick={() => {
              goBack();
            }}
          >
            <i className="bi bi-arrow-left-short"></i>
          </button>
        }
      ></HeaderComponent>

      <div className="auth-page">
        <HeroLogin></HeroLogin>

        {stateAuth === "login" && <FormLogin></FormLogin>}
        {stateAuth === "register" && <FormRegister></FormRegister>}
        {stateAuth === "forgot" && <FormForgot></FormForgot>}
      </div>
    </>
  );
};
export default Auth;
