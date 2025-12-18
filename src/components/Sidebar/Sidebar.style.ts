import { Link } from "react-router";
import styled from "styled-components";

export const SidebarConatiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 92px;
    height: 100%;
    border-radius: 10px;
    background-color: ${(props) => props.theme.sidebar};
    padding: 28px 23px;
`;

export const FilterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: -5px;
`;

export const Dropdown = styled.div`
  padding: 8px 16px;
  background: #fff;
  border-radius: 12px;
  border: 1.5px solid #E5E5E5;
  font-size: 13px;
  color: #5b5b5b;
  cursor: pointer;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 10px;
`;


export const Logo = styled.img`
    width: 32px;
`

export const Icon = styled.img`
    width: 41px;
`

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 44px;
    gap: 48px;
`

export const StyledLink = styled(Link)<{ $isSelected?: boolean }>`
    svg {
        path {
            /* stroke: ${(props) => (props.$isSelected ? props.theme.sidebar : "#ffffff")};  */
            stroke: #fff;
            /* fill: ${(props) => (props.$isSelected ? "#ffffff" : props.theme.sidebar)};  */
            transition: all 0.2s ease-in-out;
        }
    }

    p {
         visibility: hidden;
         opacity: 0;
         text-align: center;
         color: #fff;
         transition: 0.13s;
         word-break: keep-all;
         overflow-wrap: break-word;
     }
     &:hover {
         p {
             visibility: visible;
             opacity: 1;
         }
     }
`;

// export const StyledLink = styled(Link)`
//     p {
//         visibility: hidden;
//         opacity: 0;
//         text-align: center;
//         color: #fff;
//         transition: 0.13s;
//         word-break: keep-all;
//         overflow-wrap: break-word;
//     }
//     &:hover {
//         p {
//             visibility: visible;
//             opacity: 1;
//         }
//     }
// `