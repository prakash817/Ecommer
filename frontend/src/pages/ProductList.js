import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import Product from "../components/Product";
import NewsLetter from "../components/NewsLetter";

const Container = styled.div``;
const Title = styled.h2`
  margin: 20px;
`;
const ProductFilter = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;
const Filter = styled.div``;
const FilterText = styled.span`
  margin-right: 20px;
  font-size: 20px;
  font-weight: 600;
`;
const Select = styled.select`
  margin-right: 20px;
  padding: 10px;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>DRESSES</Title>
      <ProductFilter>
        <Filter>
          <FilterText>Filter Products :</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Pink</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XLL</Option>
            <Option>XL</Option>
            <Option>L</Option>
            <Option>M</Option>
            <Option>S</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText> Sort Products : </FilterText>
          <Select>
            <Option selected disabled>
              Newest
            </Option>
            <Option> Price (ASC) </Option>
            <Option> Price (DSC) </Option>
          </Select>
        </Filter>
      </ProductFilter>
      <Product />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
