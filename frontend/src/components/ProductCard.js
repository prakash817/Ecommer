import React from "react";
import styled from "styled-components";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  transition: all 1s ease;
`;

const Container = styled.div`
  flex: 1;
  min-width: 280px;
  height: 350px;
  margin: 5px;
  background-color: #cce6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  opacity: 0.5;
`;
const Image = styled.img`
  width: 100%;
  height: 80%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    background-color: "#e9f5f5";
    transform: scale(1.1);
  }
`;

const ProductCard = ({ productItem }) => {
  return (
    <Container>
      <Circle></Circle>
      <Image src={productItem.img} alt="product img" />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${productItem._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductCard;
