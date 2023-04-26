import styled from "styled-components";

export const Wrapper = styled.button`
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    display: inline-block;

    background: transparent;

    color: inherit;
    font: inherit;

    line-height: normal;

    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    padding: 19px 42px;
    background-color: ${({type}) => type === "secondary" ? '#44A0D3' : '#7E7EF1'};
    color: #fff;
    border-radius: 100px;
    font-size: 16px;
`;