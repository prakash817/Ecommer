import styled from "@emotion/styled";
import { Send } from "@mui/icons-material";
import React from "react";

const Container = styled.div`
  height: 60vh;
  background-color: #fdd9d6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 50px;
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin: 40px 0;
`;
const InputCOntainer = styled.div`
  background-color: white;
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border: 1px solid teal;
`;
const Input = styled.input`
  flex: 8;
  border: none;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title> NEWS LETTER</Title>
      <Desc> GET TIMELY UPDATES FROMYOUR FAVORITE PRODUCTS </Desc>
      <InputCOntainer>
        <Input placeholder="Enter Email" />
        <Button>
          <Send />
        </Button>
      </InputCOntainer>
    </Container>
  );
};

export default NewsLetter;
