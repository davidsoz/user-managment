
import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 0px 115px;
    padding-bottom: 60px;

    img {
        position: absolute;
        left: -50px;
        top: 5px;
        opacity: 0.5;
    }
    >div:last-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;
    }
`;

export const Message = styled.div`
    font-style: italic;
    opacity: 0.7;
    font-size: smaller;
    color:  ${props => props.valid ? "#44D36A" : "#F89797"};
`;

export const Input = styled.input`
    line-height: 24px;
    outline: none;
    border: none;
    border-bottom: 2px solid lightgray;
`

export const Fullname = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: 30px;
    position: relative;
    >div {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
`;

export const Email = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    position: relative;

    >div {
        width: 100%;
    }
`;

export const Role = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 30px;
    position: relative;
    >select {
        width: 50%;
        outline: none;
        border: none;
        border-bottom: 2px solid lightgray;
        margin-top: 10px;
        span {
            /* background-color: #B4B4B4; */
            background-color: red;
        }
    }

`;

export const Button = styled.button`
    background-color: #44A0D3;
    padding: 10px 30px;
    border: none;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    opacity: ${props => props.active ? 1 : 0.5};
`