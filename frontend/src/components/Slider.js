import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderData } from "../data";
import { mobile } from "../respossive";

const Container = styled.div`
  /* background-color: coral; */
  height: 100vh;
  width: 100%;
  position: relative;
  ${mobile({
    display: "none",
  })}
`;

const Arrow = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;

  top: 0;
  bottom: 0;
  left: ${(props) => props.direction == "left" && "10px"};
  right: ${(props) => props.direction == "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
`;
const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.bg};
  display: flex;
  align-items: center;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.sliderIndex * -100}vw);
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 50vw;
`;
const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  width: 50vw;
  /* flex: 1; */
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 50px 0;
  letter-spacing: 3px;
`;

const Button = styled.button`
  background-color: transparent;
  padding: 15px;
  font-size: 20px;
`;

const Slider = () => {
  //   console.log(sliderData);

  const [sliderIndex, setSliderIndex] = useState(0);

  function moveSlider(direction) {
    console.log("clicked", direction, "index", sliderIndex);
    if (direction == "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
    } else {
      setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
    }
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => moveSlider("left")}>
        <ArrowBackIos />
      </Arrow>

      <Wrapper>
        {sliderData.map((item) => (
          <Slide bg={item.bg} key={item.id} sliderIndex={sliderIndex}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title> {item.title} </Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => moveSlider("right")}>
        <ArrowForwardIos />
      </Arrow>
    </Container>
  );
};

export default Slider;
