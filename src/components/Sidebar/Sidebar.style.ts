import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarConatiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 92px;
    height: 100vh;
    border-radius: 10px;
    background-color: ${(props) => props.theme.sidebar};
    padding: 28px 23px;
`;

export const Logo = styled.img`
    width: 32px;
`;

export const Icon = styled.img`
    width: 41px;
`;

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 44px;
    gap: 48px;
`;

export const StyledLink = styled(Link)`
    p {
        visibility: hidden;
        opacity: 0;
        text-align: center;
        color: #fff;
        transition: 0.13s;
    }
    &:hover {
        p {
            visibility: visible;
            opacity: 1;
        }
    }
`;