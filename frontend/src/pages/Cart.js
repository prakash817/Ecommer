import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
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
`;
const TopText = styled.span`
  margin-right: 10px;
  text-decoration: underline;
  cursor: pointer;
`;
const Bottom = styled.div`
  display: flex;
`;
const Info = styled.div`
  flex: 2;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
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
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Summery = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  padding: 20px;
  height: 60vh;
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
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>
                    <b>Name</b> Shoe
                  </ProductName>
                  <ProductId>
                    <b>Id</b> 85285811
                  </ProductId>

                  <ProductColor color="red"> </ProductColor>

                  <ProductSize>
                    <b>Size</b> 20.6
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 40</ProductPrice>
              </PriceDetail>
            </Product>
            <hr />
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>
                    <b>Name</b> Shoe
                  </ProductName>
                  <ProductId>
                    <b>Id</b> 85285811
                  </ProductId>

                  <ProductColor color="red"> </ProductColor>

                  <ProductSize>
                    <b>Size</b> 20.6
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 40</ProductPrice>
              </PriceDetail>
            </Product>
            <hr />
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>
                    <b>Name</b> Shoe
                  </ProductName>
                  <ProductId>
                    <b>Id</b> 85285811
                  </ProductId>

                  <ProductColor color="red"> </ProductColor>

                  <ProductSize>
                    <b>Size</b> 20.6
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 40</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summery>
            <SummeryTitle>YOUR ORDERR</SummeryTitle>
            <SummeryItem>
              <SummeryItemText> Subtotal </SummeryItemText>
              <SummeryItemPrice> $ 40 </SummeryItemPrice>
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
              <SummeryItemPrice> $ 80 </SummeryItemPrice>
            </SummeryItem>
            <SummeryButton>CHECKOUT NOW</SummeryButton>
          </Summery>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
