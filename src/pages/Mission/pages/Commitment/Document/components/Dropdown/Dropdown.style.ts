import styled from 'styled-components'

export const DropdownContainer = styled.div`
  width: 70px;
  position: relative;
  font-family: Arial, sans-serif;
`;

export const DropdownHeader = styled.button`
  width: 100%;
  padding: 6px 0px;
  border: 1px solid #ccc;
  border-radius: 2px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color:rgb(221, 221, 221);
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  width: 98%;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid #ccc;
  border-top: none;
  max-height: 200px;
  overflow-y: auto;
  background: white;
  z-index: 10;
`;

export const DropdownItem = styled.li`
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    background-color:rgb(221, 221, 221);
  }
`;
