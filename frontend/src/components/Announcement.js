import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Announcement = () => {
  return (
    <Container>
      Big Discount sale Coming soon , Price Dropped by 30-40%
    </Container>
  );
};

export default Announcement;
