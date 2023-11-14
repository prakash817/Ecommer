import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../respossive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/userRedux";

const Container = styled.div`
  height: 60px;
  ${mobile({
    height: "50px",
  })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    padding: "10px",
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    display: "none",
  })}
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
  ${mobile({
    width: "50px",
  })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const MyLogo = styled.h1`
  ${mobile({
    fontSize: "24px",
    marginLeft: "5px",
  })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: right;
  ${mobile({
    flex: 2,
    justifyContent: Center,
  })}
`;
const MenuItem = styled.div`
  margin-left: 20px;
  cursor: pointer;
  ${mobile({
    marginLeft: "10px",
    // flex: 2,
    fontSize: "12px",
  })}
`;

const Navbar = () => {
  const { quantity } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout(null));
  };
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
          <MenuItem>
            <Link to={"/register"}>{!user && "Register"}</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/login"}>{!user && "Login"}</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/login"} onClick={handleLogout}>
              {user && "Logout"}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/cart"}>
              <Badge badgeContent={quantity ? quantity : ""}>
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
