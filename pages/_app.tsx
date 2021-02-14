import React from "react";
import { AppProps } from "next/app";
import { StyledThemeProvider } from "@definitions/styled-components";
import { Provider } from "react-redux";
import store from "@redux/store";
import { appWithTranslation } from "@i18n";
import App from "next/app";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <StyledThemeProvider>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </StyledThemeProvider>
    );
}

MyApp.getInitialProps = async (appContext) => ({
    ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
