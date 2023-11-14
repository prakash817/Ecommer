import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../respossive";
import { useParams } from "react-router-dom";
import axios from "axios";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  margin: 20px;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1``;

const Desc = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 50px 0;
  ${mobile({ margin: "10px 0" })}
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
  ${mobile({ width: "100%" })}
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
  ${mobile({ width: "100%" })}
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
  const { id } = useParams();
  const [singleProd, setSingleProd] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const getSingleProd = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/products/find/${id}`
        );
        setSingleProd(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleProd();
  }, [id]);

  const handleQuantity = (q) => {
    if (q == "plus") {
      setQuantity(quantity + 1);
    } else if (q == "minus" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleCart = () => {
    dispatch(addProduct({ ...singleProd, quantity, size, color }));
    // console.log(singleProd, "ss");
  };
  console.log(singleProd);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src={singleProd.img} alt={singleProd.title} />
        </ImageContainer>
        <InfoContainer>
          <Title> {singleProd.title}</Title>
          <Desc>{singleProd.desc}</Desc>
          <Price> price : $ {singleProd.price}</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color : </FilterTitle>
              {singleProd?.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <Select onChange={(e) => setSize(e.target.value)}>
                {singleProd?.size?.map((s) => (
                  <Option key={s}>{s}</Option>
                ))}
              </Select>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AddQuantity>
              <Remove onClick={() => handleQuantity("minus")} />
              <Quantity>{quantity}</Quantity>
              <Add onClick={() => handleQuantity("plus")} />
            </AddQuantity>
            <AddCartButton onClick={handleCart}>Add To Cart</AddCartButton>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
