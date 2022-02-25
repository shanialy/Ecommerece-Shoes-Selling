import styled from "styled-components";
import { mobile } from "../Responsive";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/free-photo/sale-young-smiling-woman-holding-shopping-bags-black-friday-holiday-happy-girl-blue-background_132310-2649.jpg?size=626&ext=jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agremeents = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-left: 27%;
`;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE NEW ACCOUNT</Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Input placeholder="Username" />
          <Input placeholder="Phone No" />
          <Input placeholder="Address" />
          <Input placeholder="Province" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agremeents>
            Creating an account please make sure you have read our{" "}
            <b>Privacy Policy</b>
          </Agremeents>
          <Button>SIGN UP</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
