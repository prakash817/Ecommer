import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import Product from "../components/Product";
import NewsLetter from "../components/NewsLetter";
import { mobile } from "../respossive";
import { useParams } from "react-router-dom";

const Container = styled.div``;
const Title = styled.h2`
  margin: 20px;
`;
const ProductFilter = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;
const Filter = styled.div`
  ${mobile({
    display: "flex",
    flexDirection: "column",
  })}
`;
const FilterText = styled.span`
  margin-right: 20px;
  font-size: 20px;
  font-weight: 600;
`;
const Select = styled.select`
  margin-right: 20px;
  padding: 10px;
  ${mobile({
    margin: "10px 0",
  })}
`;
const Option = styled.option``;

const ProductList = () => {
  const { category } = useParams();
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("latest");

  const handleFilter = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{category.toUpperCase()}</Title>
      <ProductFilter>
        <Filter>
          <FilterText>Filter Products :</FilterText>
          <Select name="color" onChange={handleFilter}>
            <Option value="">Color</Option>
            <Option value="white">White</Option>
            <Option value="red">Red</Option>
            <Option value="blue">Blue</Option>
            <Option value="yellow">Yellow</Option>
            <Option value="pink">Pink</Option>
            <Option value="green">Green</Option>
          </Select>
          <Select name="size" onChange={handleFilter}>
            <Option>Size</Option>
            <Option>XLL</Option>
            <Option>XL</Option>
            <Option>L</Option>
            <Option>M</Option>
            <Option>S</Option>
            <Option>XS</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText> Sort Products : </FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value={"latest"}>Latest</Option>
            <Option value={"asc"}> Price (ASC) </Option>
            <Option value={"dsc"}> Price (DSC) </Option>
          </Select>
        </Filter>
      </ProductFilter>
      <Product cat={category} filters={filters} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
