import React from "react";
import {
  Container,
  Heading,
  Sections,
  P,
  Info,
  InfoWrapper,
  Link,
} from "./FormatsElements";
import H3 from "../shared/H3";
import Button from "../shared/Button";
import Section from "../section/Section";
import vinyl from "../../img/vinyl.png";
import cassette from "../../img/cassette.png";
import press from "../../img/press.png";
import crowdfunding from "../../img/crowdfunding.png";

const formats = [
  {
    title: "Vinyl",
    button: "CIRCLE VINYL",
    bg: "#81836C",
    img: vinyl,
    desc: "We know how special pressed records are to you. Our products are built for fans, by fans. We make it easy for artists to press vinyl, so the music you love can keep reaching ears in the most beautiful way.",
  },
  {
    title: "Cassette",
    button: "RECTANGLE PLASTIC",
    bg: "#497775",
    img: cassette,
    desc: "Cassettes have always been special to music fans and artists. Whether you are saving a recording of a great concert, or preserving an early demo, there’s no better way to keep that music close than on cassette tapes.",
  },
];
const models = [
  {
    title: "Crowdfunding",
    button: "no risk no waste",
    bg: "#FFF804",
    img: press,
    desc: "Rally your fans and gather pledges. Press the exact number of records you need, without having to pay anything upfront.",
  },
  {
    title: "Pre-order",
    button: "get into it",
    bg: "81836C",
    img: crowdfunding,
    desc: "Put your music on physical, sooner. Take pre-orders from fans and we'll take care of the rest.",
  },
];
const Formats = () => {
  return (
    <Container>
      <Heading>
        <H3>Choose from two formats and three project types.</H3>
      </Heading>
      <Sections>
        {formats.map(
          (
            format: {
              title: string;
              button: string;
              desc: string;
              bg: string;
              img: any;
            },
            index: number
          ) => (
            <Section format={format} key={index} />
          )
        )}
      </Sections>
      <Heading>
        <P>
          No matter where you’re at in your career, we’ve got a production model
          to suit you.
        </P>
      </Heading>
      <Sections>
        {models.map(
          (
            format: {
              title: string;
              button: string;
              desc: string;
              bg: string;
              img: any;
            },
            index: number
          ) => (
            <Section format={format} key={index} />
          )
        )}
      </Sections>
      <Info>
        <InfoWrapper>
          <P className="info_text">
            Just after straight up vinyl pressing or cassette duplication? We do
            that too. Tell us where and we'll ship in bulk to wherever you need.
          </P>
          <Link>START A PRESS ONLY PROJECT</Link>
        </InfoWrapper>
      </Info>
    </Container>
  );
};

export default Formats;
