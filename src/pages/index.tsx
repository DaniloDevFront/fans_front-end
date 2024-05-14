import { HeaderComponent } from "@/app/components/components-core";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { stepAuth } from "@/app/shared/store/actions/auth.actions";

export default function Index() {
  const dispatch = useDispatch();

  const action = (param: string) => {
    dispatch(stepAuth(param));
  };

  return (
    <>
      <HeaderComponent
        slot_start={
          <div className="d-center">
            <Image src="/assets/svg/logo-letter-white.svg" className="logo-header" alt="" width={1000} height={1000} />

            <div className="navigation d-none d-lg-flex">
              <button type="button" className="btn btn-nav d-center active">
                <i className="bi bi-house-door"></i>
                <span>Home</span>
              </button>

              <button type="button" className="btn btn-nav d-center">
                <i className="bi bi-shop"></i>
                <span>Fans Place</span>
              </button>

              <button type="button" className="btn btn-nav d-center">
                <i className="bi bi-wallet2"></i>
                <span>Carteira</span>
              </button>
            </div>
          </div>
        }
        slot_end={
          <div className="navigation d-center">
            <button type="button" className="btn btn-cart">
              <i className="bi bi-cart3"></i>
            </button>

            <button type="button" className="btn btn-login d-none d-lg-flex" onClick={() => action("login")} data-bs-toggle="modal" data-bs-target="#modal-auth">
              Entrar
            </button>

            <button type="button" className="btn btn-primary btn-register d-none d-lg-flex" onClick={() => action("register")} data-bs-toggle="modal" data-bs-target="#modal-auth">
              Cadastrar-se
            </button>

            <button type="button" className="btn btn-menu d-lg-none">
              <Image src={"/assets/svg/img/avatar-profile.jpeg"} className="avatar-profile" width={32} height={32} alt="avatar"></Image>
            </button>
          </div>
        }
      />
    </>
  );
}
