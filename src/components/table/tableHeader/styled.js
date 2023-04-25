import styled from "styled-components";

export const TableH = styled.div`
    position: relative;
    font-weight: 500;
    font-size: 16px;
    max-width: 1600px;
    margin: 0 auto;
    background-color: #f3f3f3;
    display: flex;
    justify-content: space-between;
    padding: 55px 100px 45px 276px;
    border-bottom: 2px solid lightgray;
    >div {
        display: flex;
        gap: 20px;
        width: 150px;
        justify-content: center;
    }
    >div:nth-child(2) {
        justify-content: start;
        width: 400px;
    }
    >div:last-child {
        justify-content: end;
    }
`;

export const AddButton = styled.button`
    position: absolute;
    background-color: #305ECA;
    width: 72px;
    height: 72px;
    border: none;
    color: #fff;
    border-radius: 50%;
    font-size: 33px;
    left: 160px;
    top: -37px;
    cursor: pointer;
`


