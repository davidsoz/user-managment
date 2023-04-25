
import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 0px 115px;
    padding-bottom: 60px;
`
export const Button = styled.button`
    background-color: #F79696;
    padding: 10px 30px;
    border: none;
    border-radius: 20px;
    color: #fff;
    margin-top: 20px;
`

export const UserName = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
    border-bottom: 2px solid lightgray;
    opacity: ${props => props.actove ? "1" : "0.5"};
    img {
        position: absolute;
        left: -50px;
    }
`;