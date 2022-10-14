import React from "react";
import Button from "../shared/Button";
import H3 from "../shared/H3";
import { Container, P, Img } from "./SectionElements";

type SectionTypes = {
  format: {
    title: string;
    button: string;
    desc: string;
    bg: string;
    img: any;
  };
};
const Section = ({ format }: SectionTypes) => {
  return (
    <Container bg={format.bg}>
      <Button>{format.button}</Button>
      <H3>{format.title}</H3>
      <P>{format.desc}</P>
      <Img src={format.img} />
    </Container>
  );
};

export default Section;
