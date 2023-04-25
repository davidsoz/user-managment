import styled from "styled-components";

export const Back = styled.div`
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    background-color: gray;
    z-index: 1;
    opacity: 0.5;
`;

export const Overlay = styled.div`
    position: absolute;
    z-index: 2;
    left: 0; right: 0; top: 233px;
    margin: auto;
    width: 645px;
    background-color: #fff;
    .close {
        text-align: end;
        padding: 10px;
        cursor: pointer;
    }
`;
