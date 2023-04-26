
import styled from "styled-components";

export const TableC = styled.div`

`;

export const Row = styled.div`
    font-weight: 500;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 100px 40px 276px;
    border-bottom: 1px solid lightgray;
    max-width: 1600px;
    margin: 0 auto;
    opacity: ${props => props.status ? 1 : 0.5};
`;

export const Avatar = styled.div `
    position: absolute;
    left: -100px;
`;
export const User = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 3px;
    width: 400px;
    >div:first-child {
        font-weight: bold;
    }
    >div:last-child {
        font-weight: lighter;
    }
`;
export const Role = styled.div`
    display: flex;
    align-items: center;
    width: 150px;
    gap: 15px;
    justify-content: center;
    img.vpn {
        background-color: #7E7EF1;
        padding: 2px 10px;
        border-radius: 44%;
    }
    img {
        cursor: pointer;
    }
`;
export const Status = styled.div`
    display: flex;
    width: 150px;
    justify-content: center;
    img {
        cursor: pointer;
    }
`;
export const Action = styled.div`
    display: flex;
    width: 150px;
    gap: 15px;
    justify-content: end;
    align-items: center;
    .setup {
        height: 20px;
        opacity: 0.3;
    }
    >img {
        cursor: pointer;
    }
`;

