import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  margin: 20px;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;

const Title = styled.h1``;

const Desc = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 50px 0;
`;

const Price = styled.p`
  font-size: 25px;
  font-weight: 500;
  color: teal;
`;

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid teal;
  font-weight: 700;
  font-size: 18px;
`;
const Option = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AddQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Quantity = styled.div`
  margin: 0 10px;
  padding: 10px;
  border: 1px solid teal;
  border-radius: 10px;
`;
const AddCartButton = styled.button`
  padding: 15px;
  background-color: white;
  color: teal;
  border: 2px solid teal;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: #b8ecd6;
  }
`;

const SingleProduct = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="product pic" />
        </ImageContainer>
        <InfoContainer>
          <Title> Dress</Title>
          <Desc>
            lorem-ipsum.20 lorem-ipsum.20 lorem-ipsum.20 lorem-ipsum.20
            lorem-ipsum.20 lorem-ipsum.20 lorem-ipsum.20 lorem-ipsum.20
            lorem-ipsum.20
          </Desc>
          <Price> price : $50</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color : </FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="red" />
            </Filter>
            <Filter>
              <Select>
                <Option disabled selected>
                  Size
                </Option>
                <Option>XLL</Option>
                <Option>XL</Option>
                <Option>L</Option>
                <Option>M</Option>
                <Option>S</Option>
                <Option>XS</Option>
              </Select>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AddQuantity>
              <Remove />
              <Quantity>1</Quantity>
              <Add />
            </AddQuantity>
            <AddCartButton>Add To Cart</AddCartButton>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
