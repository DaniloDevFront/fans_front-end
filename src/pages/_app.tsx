import { useEffect } from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import RootLayout from "@/app/layout";
import { store } from "@/app/shared/store/store";
import ModalAuth from "@/app/components/components-core/modal-auth/modal-auth";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min");
    }
  }, []);

  return (
    <Provider store={store}>
      <RootLayout>
        <Component {...pageProps} />

        <ModalAuth />
      </RootLayout>
    </Provider>
  );
}

export default MyApp;
