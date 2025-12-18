import styled from "styled-components";

export const ToolbarContainer = styled.div`
    height: 57px;    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    background: #EAF8F2;
`;

export const IconButton = styled.button<{ active?: boolean }>`
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    color: ${({ active }) => (active ? '#2F7247' : '#60AD8F;')};
    transition: color 0.15s;

    &:hover {
    color: #2F7247;
    }
`;
export const IconButton2 = styled.div<{ active?: boolean }>`
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    color: ${({ active }) => (active ? '#2F7247' : '#60AD8F;')};
    transition: color 0.15s;

    &:hover {
    color: #2F7247;
    }
`;