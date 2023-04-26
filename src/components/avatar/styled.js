import styled from "styled-components";

export const AvatarWrapper = styled.div`
    background-color: #666;
    width: ${({ width }) => width+"px"};
    height: ${({ height }) => height+"px"};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: ${({ width }) => width - 10 +"px"};
        height: ${({ height }) => height - 10 +"px"};
    }
`;