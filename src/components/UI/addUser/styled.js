
import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 0px 115px;
    padding-bottom: 60px;

    img {

    }
    >div:last-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;
    }
`;

export const Icon = styled.img`
    position: absolute;
    left: -50px;
    top: 5px;
    opacity: ${props => props.valid ? 1 : 0.5}
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
    }

`;

export const Button = styled.button`
    background-color: ${props => props.active ? "#44A0D3" : "#C6C6C6"};
    padding: 10px 30px;
    border: none;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    opacity: ${props => props.active ? 1 : 0.5};
`