import React from "react";
import Button from "../shared/Button";
import {
  Container,
  Sections,
  Section,
  TextContent,
  P,
  ImgContainer,
  Img,
  H3,
} from "./SupportElements";

const Support = () => {
  return (
    <Container>
      <Sections>
        <Section bg="black">
          <ImgContainer>
            <Img
              className="black_img"
              src="https://assets.qrates.com/assets/public/store_logo-33b81e17d3d1b7f21e3c59964ea0c0a6f4e78a989ee8345653962cffc4267665.png"
            ></Img>
          </ImgContainer>
          <TextContent>
            <Button>Retail network</Button>
            <H3 color="white">
              Worldwide distro,
              <br /> demystified
            </H3>
            <P color="white">
              Get direct access to over 150 of our retail partners across the
              globe.
            </P>
          </TextContent>
        </Section>
        <Section bg="#E280FF">
          <ImgContainer>
            <Img
              className="girl_img"
              src="https://assets.qrates.com/assets/public/support-67aae38b60a008aff7414d12e251fa29f0d832a86a57d28e0d1667f5a55c6b8a.jpg"
            ></Img>
          </ImgContainer>
          <TextContent>
            <Button>CUSTOMER SUPPORT</Button>
            <H3 color="black">
              Here to help,
              <br /> whenever you need it.
            </H3>
            <P color="black">
              Whether you’re an artist in the middle of product, or a fan with
              questions about your order; our team is here to help.
            </P>
          </TextContent>
        </Section>
      </Sections>
    </Container>
  );
};

export default Support;
