import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #F3F3F3;
    max-width: 1920px;
    margin: 0 auto;
    h2 {
        font-size: 36px;
    }

`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: min-content;
    text-align: center;

    span {
        display: inline-block;
        margin-top: 15px;
        text-transform: uppercase;
        font-size: 14px;
        color: #B0ACAC;
    }

    p {
        font-size: 48px;
        line-height: 1;
        margin-top: 30px;
    }

    a {
        font-size: 16px;
        text-decoration: none;
        color: #000000;
        margin-top: 13px;
    }

    button {
        margin-top: 85px;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1600px;
    margin: 0 auto;
    padding: 63px 77px 245px 192px;
`

export const Details = styled.div`

    input {
        background-color: inherit;
    }

    .list {
        position: relative;
        margin-top: 55px;

        img {
            position: absolute;
            left: -50px;
            top: -2px;
        }

        .input-container {
            margin-top: 15px;

            div {
                margin-top: 30px;
            }
        }
    }

    button {
        margin-top: 135px;
    }
`

export const Permission = styled.div`
    width: 600px;

    .mt-50 {
        margin-top: 50px;
    }

    h3 {
        font-weight: 700;
    }

    .group {
        position: relative;
        font-weight: 600;

        .arrow {
            position: absolute;
            left: -36px;
        }
    }

    .flex-between {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    hr {
        margin: 27px 0 19px 0;
    }

    ul {
        list-style-type: circle;
        margin-left: 50px;
        margin-top: 43px;
    }

    li {
        font-weight: 600;
        line-height: 2;
    }

    .dot {
        display: inline-block;
        border-radius: 50%;
        width: 6px;
        height: 6px;
        background-color: #44A0D3;
        margin-right: 12px;
    }
`

