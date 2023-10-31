import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  /* border: 1px solid black; */
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.span`
  margin-left: 20px;
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
`;
const SearchInput = styled.input`
  border: none;
  padding: 5px 10px;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const MyLogo = styled.h1``;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: right;
`;
const MenuItem = styled.div`
  margin-left: 20px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            {" "}
            <SearchInput type="text" placeholder="input" />
            <Search style={{ color: "gray", fontSize: "20px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <MyLogo>PRAKASH.</MyLogo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <Badge badgeContent={4}>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
