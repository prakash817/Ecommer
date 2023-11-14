import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../respossive";
import Payment from "./Payment";
import { useSelector } from "react-redux";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({
    padding: "10px",
  })}
`;
const Title = styled.h1`
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: bold;
  border: ${(prop) => prop.type == "filled" && "none"};

  background-color: ${(prop) =>
    prop.type == "filled" ? "black" : "transparent"};
  color: ${(prop) => prop.type == "filled" && "white"};
  cursor: pointer;
`;

const TopTexts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    display: "none",
  })}
`;
const TopText = styled.span`
  margin-right: 10px;
  text-decoration: underline;
  cursor: pointer;
`;
const Bottom = styled.div`
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;
const Info = styled.div`
  flex: 2;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
  })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(prop) => prop.color};
`;
const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  ${mobile({
    margin: "5px 15px",
  })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({
    margin: "15px 0",
  })}
`;

const Summery = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  padding: 20px;
  height: 55vh;
`;

const SummeryTitle = styled.h1``;
const SummeryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type == "total" && "500"};
  font-size: ${(props) => props.type == "total" && "24px"};
`;
const SummeryItemText = styled.span``;
const SummeryItemPrice = styled.span``;
const SummeryButton = styled.button`
  width: 100%;
  background-color: teal;
  padding: 10px;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart, "crta");
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title> YOUR BAG </Title>
        <Top>
          <TopButton>CONTINUE SHOPPING </TopButton>
          <TopTexts>
            <TopText> Shopping Bags(2) </TopText>
            <TopText> Wishlist(0) </TopText>
          </TopTexts>
          <TopButton type="filled">CHECK OUT</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.length ? (
              cart.products.map((product) => (
                <Product>
                  <ProductDetail>
                    <Image src={product.img} />
                    <Details>
                      <ProductName>
                        <b>Name</b> {product.title}
                      </ProductName>
                      <ProductId>
                        <b>Id</b> {product._id}
                      </ProductId>

                      <ProductColor color={product.color}> </ProductColor>

                      <ProductSize>
                        <b>Size</b> {product.size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add />
                      <ProductAmount> {product.quantity}</ProductAmount>
                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>$ {product.price}</ProductPrice>
                  </PriceDetail>
                </Product>
              ))
            ) : (
              <>
                <hr />
                <h1>Cart is Empty</h1>
              </>
            )}
            <hr />
          </Info>
          <Summery>
            <SummeryTitle>YOUR ORDERR</SummeryTitle>
            <SummeryItem>
              <SummeryItemText> Subtotal </SummeryItemText>
              <SummeryItemPrice> $ {cart.total} </SummeryItemPrice>
            </SummeryItem>
            <SummeryItem>
              <SummeryItemText> Estimated Shipping </SummeryItemText>
              <SummeryItemPrice> $ 4 </SummeryItemPrice>
            </SummeryItem>
            <SummeryItem>
              <SummeryItemText> Shipping Discount </SummeryItemText>
              <SummeryItemPrice> - $ 4 </SummeryItemPrice>
            </SummeryItem>
            <hr />
            <SummeryItem type="total">
              <SummeryItemText> Total </SummeryItemText>
              <SummeryItemPrice> $ {cart.total} </SummeryItemPrice>
            </SummeryItem>
            <SummeryButton>
              <Payment total={cart.total} />
            </SummeryButton>
          </Summery>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
