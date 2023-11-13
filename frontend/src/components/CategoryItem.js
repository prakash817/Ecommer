import React from "react";
import styled from "styled-components";
import { mobile } from "../respossive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  height: 70vh;
  margin: 3px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({
    height: "30vh",
  })}
`;
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
`;
const Title = styled.h1`
  color: white;
  font-weight: bold;
`;
const Button = styled.button`
  border: none;
  font-size: 20px;
  color: gray;
  background-color: white;
  margin-top: 20px;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title> {item.title} </Title>
          <Button>SHOP NOW </Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
