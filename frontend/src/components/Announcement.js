import React from "react";
import styled from "styled-components";
import { mobile } from "../respossive";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    fontSize: "14px",
    width: "100vw",
  })}
`;

const Announcement = () => {
  return (
    <Container>
      Big Discount sale Coming soon , Price Dropped by 30-40%
    </Container>
  );
};

export default Announcement;
