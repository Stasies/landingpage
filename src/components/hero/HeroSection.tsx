import React from "react";
import Button from "../shared/Button";
import img1 from "../../img/top_section_image_1.png";
import img2 from "../../img/top_section_image_2.png";
import svg from "../../img/paid_to_artists.svg";
import {
  Container,
  Wrapper,
  Left,
  P,
  Right,
  ImgContainer,
  Img,
  Logo,
  H2,
} from "./HeroSectionElements";

const HeroSection = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Button>why qrates</Button>
          <H2>
            Music in your hands.
            <br />
            Without the barriers.
          </H2>
          <P>
            Full-service production, a global retail network, customer support -
            and you keep up to 85% of profits. ↓
          </P>
        </Left>
        <Right>
          <ImgContainer rotate="5deg">
            <Img src={img1} />
          </ImgContainer>
        </Right>
      </Wrapper>
      <Wrapper>
        <Right>
          <ImgContainer rotate="-5deg" className="img_container_bottom">
            <Img src={img2} />
          </ImgContainer>
        </Right>
        <Logo>
          <Img src={svg} className="logo" />
        </Logo>
      </Wrapper>
    </Container>
  );
};

export default HeroSection;
