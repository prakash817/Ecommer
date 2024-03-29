import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../respossive";
import { login } from "../redux/apiCall";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  background-color: whitesmoke;
  padding: 20px;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 5px;
`;

const Button = styled.button`
  width: 30%;
  border: none;
  padding: 10px;
  background: teal;
  color: white;
  font-size: 16px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Link = styled.a`
  font-size: 12px;
  text-decoration: underline;
  margin: 5px 0;
`;
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = { username, password };
    login(dispatch, user);
  };

  return (
    <Container>
      <Wrapper>
        <Title>Create An Account </Title>
        <Form>
          <Input
            type="text"
            placeholder="UserName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Link> SOMETHING WENT WRONG </Link>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD ? </Link>
          <Link> CREATE A NEW ACCOUNT </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
