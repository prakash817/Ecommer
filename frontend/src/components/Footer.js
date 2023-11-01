import styled from "@emotion/styled";
import {
  Email,
  Facebook,
  Instagram,
  MailOutline,
  Map,
  Phone,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import React from "react";

const Container = styled.div`
  display: flex;
  height: 70vh;
  background-color: #cfd9df;
`;
const Left = styled.div`
  padding: 20px;
  flex: 1;
`;

const Logo = styled.h1`
  font-size: 40px;
  margin-bottom: 40px;
`;
const Desc = styled.p`
  margin-bottom: 40px;
`;
const SocialConatainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  color: white;
  background-color: #${(props) => props.color};
`;

const Center = styled.div`
  padding: 20px;
  flex: 1;
`;

const Title = styled.h3`
  margin-bottom: 40px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  list-style: none;
  margin-bottom: 10px;
`;

const Right = styled.div`
  padding: 20px;
  flex: 1;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Payment = styled.img`
  width: 50%;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>PRAKASH.</Logo>
        <Desc>
          This is a shopping website Where you can find latest Trending Cloths.
        </Desc>
        <SocialConatainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="66CAA5">
            <WhatsApp />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialConatainer>
      </Left>

      <Center>
        <Title> USEFUL LINKS </Title>
        <List>
          <ListItem> Home </ListItem>
          <ListItem> Cart </ListItem>
          <ListItem> Mens Fasion </ListItem>
          <ListItem> Womens Fasion </ListItem>
          <ListItem> Accessories</ListItem>
          <ListItem> My Acoount </ListItem>
          <ListItem> Order Tracking</ListItem>
          <ListItem> Wishlist </ListItem>
          <ListItem> Order </ListItem>
          <ListItem> Support </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Map style={{ marginRight: "10px" }} /> XYZ CITY NEWYORK 560068
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +91 23 456 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> Support@prakash.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
