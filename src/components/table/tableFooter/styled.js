import styled from "styled-components";

export const TableH = styled.div`
    display: flex;
    max-width: 1600px;
    margin: 0 auto;
    justify-content: space-between;
    padding: 50px 100px 145px 276px;
    .records {
        display: flex;
        gap: 10px;
        align-items: center;
    }
    .select {
        border: none;
        background-color: #f3f3f3;
        outline: none;
    }
    >div.pagination {
        display: flex;
        gap: 10px;
        align-items: center;
        .page {
            display: flex;
            gap: 10px;
            div {
                padding: 5px;
                width: 20px;
                text-align: center;
                font-weight: bold;
                border-radius: 5px;
                background-color: #C6C6C6;
                cursor: pointer;
            }
            div:last-child {
                background-color: #f3f3f3;
            }
        }
    }
`;