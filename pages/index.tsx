import React from "react";

import { Footer, QuizBackground, Widget, Corner, Logo } from "@components";
import styled from "styled-components";
import GlobalStyle from "@styles/globalStyles";
import PropTypes from "prop-types";
import { i18n, Link, withTranslation } from "../i18n";

export const QuizContainer = styled.div`
    width: 100%;
    max-width: 350px;
    padding-top: 45px;
    margin: auto 5%;
    @media screen and (max-width: 500px) {
        margin: auto;
        padding: 15px;
    }
`;
const Home = ({ t }) => {
    return (
        <QuizBackground>
            <GlobalStyle />
            <QuizContainer>
                <Logo />
                <Widget>
                    <Widget.Header>
                        <h1>Title</h1>
                    </Widget.Header>
                    <Widget.Content>
                        <p>Description</p>
                    </Widget.Content>
                </Widget>

                <Widget>
                    <Widget.Content>
                        <h1>Quizes da Galera</h1>

                        <p>lorem ipsum dolor sit amet...</p>
                    </Widget.Content>
                </Widget>
                <Footer />
            </QuizContainer>
            <Corner projectUrl="https://github.com/" />
        </QuizBackground>
    );
};

//export default Home;
Home.getInitialProps = async () => ({
    namespacesRequired: ["common"],
});

Home.propTypes = {
    t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Home);
