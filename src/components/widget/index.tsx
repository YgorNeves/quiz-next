import styled from "styled-components";

export const Widget = styled.div`
    margin-top: 24px;
    margin-bottom: 24px;

    overflow: hidden;
    color: rgb(191, 224, 229);

    border-radius: 6px;

    background: #3e567c;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%),
        0 1px 5px 0 rgb(0 0 0 / 12%);

    h1,
    h2,
    h3 {
        font-size: 16px;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 0;
    }

    p {
        font-size: 14px;
        font-weight: 400;
        line-height: 1;
    }
`;

Widget.Header = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 18px 32px;
    background-color: #121524;

    * {
        margin: 0;
    }
`;

Widget.Content = styled.div`
    padding: 24px 32px 32px 32px;

    & > *:first-child {
        margin-top: 0;
    }

    & > *:last-child {
        margin-bottom: 0;
    }

    ul {
        list-style: none;
        padding: 0;
    }
`;
