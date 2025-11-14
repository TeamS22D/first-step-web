import styled from "styled-components";

const Button = styled.button`
  width: 500px;
  padding: 20px 0px;
  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 10px;
  background-color: ${(props) => props.theme.mainColor};
  color: #fff;
`;

const LongButton = () => {
    return (
        <Button>
            텍스트
        </Button>
    )
}

export default LongButton