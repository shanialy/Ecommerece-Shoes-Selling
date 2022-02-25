import SendSharpIcon from "@material-ui/icons/SendSharp";
import styled from "styled-components";
import { mobile } from "../../Responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #d3d3d3;
`;
const Title = styled.h1`
  font-size: 60px;
  margin: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40%;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  font-weight: 200;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: blue;
  color: white;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>News Letter</Title>
      <Description>Get Updates On Our New Products</Description>
      <InputContainer>
        <Input placeholder="Email...." />
        <Button>
          <SendSharpIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
