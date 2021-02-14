// src/components/corner/index.js
import styled from "styled-components";

export const FooterWrapper = styled.footer`
    background-color: #00000070;
    padding: 20px;
    display: flex;
    align-items: center;
    border-radius: 4px;

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

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    border: 0;
    right: 0;
    z-index: 20;
`;

export const SVGWrapper = styled.svg`
    fill: white;
    color: black;
    cursor: pointer;

    &:hover .octo-arm {
        animation: octocat-wave 560ms ease-in-out;
    }

    @keyframes octocat-wave {
        0%,
        100% {
            transform: rotate(0);
        }
        20%,
        60% {
            transform: rotate(-25deg);
        }
        40%,
        80% {
            transform: rotate(10deg);
        }
    }
    @media (max-width: 500px) {
        &:hover .octo-arm {
            animation: none;
        }

        & .octo-arm {
            animation: octocat-wave 560ms ease-in-out;
        }
    }
`;
