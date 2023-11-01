import React from "react";
import { popularProducts } from "../data";
import ProductCard from "./ProductCard";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Product = () => {
  return (
    <Container>
      {popularProducts.map((productItem) => (
        <ProductCard productItem={productItem} key={productItem.id} />
      ))}
    </Container>
  );
};

export default Product;
