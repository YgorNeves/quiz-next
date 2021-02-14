import styled from "styled-components";

// src/components/Footer/index.js
export const FooterWrapper = styled.footer`
    background-color: rgb(191, 224, 229);
    padding: 20px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    color: #3e567c;

    img {
        width: 58px;
        margin-right: 23px;
    }

    a {
        color: white;
        text-decoration: none;
        transition: 0.3s;

        &:hover,
        &:focus {
            opacity: 0.5;
        }

        span {
            text-decoration: underline;
        }
    }
`;
