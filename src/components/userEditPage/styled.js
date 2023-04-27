import styled from "styled-components";


export const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    background-color: #f3f3f3;
`;
export const Container = styled.div`
    max-width: 1600px;
    height: 560px;
    margin: 0 auto;
    gap: 200px;
    display: flex;
    padding: 63px 50px 245px 50px;
    justify-content: space-between;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 233px;
    align-items: center;
    justify-content: space-between;
    >div:first-child {
        gap: 10px;
    }
    >div {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        >h1 {
            font-size: 48px;
        }
    }
`;

export const Button = styled.button`
    background-color: #7E7EF1; // #44A0D3
    width: 210px;
    height: 60px;
    border: none;
    border-radius: 100px;
    color: #fff;
    margin-top: 20px;
    cursor: pointer;
`
export const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    button {
        background-color: #44A0D3;
    }
`

export const UserStatus = styled.div`
    position: absolute;
    top: -50px;
    left: -50px;
    display: flex;
    gap: 10px;
`;

export const Input = styled.input`
    line-height: 18px;
    outline: none;
    border: none;
    border-bottom: 2px solid lightgray;
    width: 70%;
    margin-left: 10px;
    background-color: inherit;
`

export const Form = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    >label {
        color: #33A3DC;
        margin-top: 15px;
    }
`;

export const Permission = styled.div`
    flex-grow: 3;
    .flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .flex.super-admin, .group{
        border-bottom: 2px solid lightgray;
        padding: 20px 0;
    }
`;