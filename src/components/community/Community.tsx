import React from "react";
import Button from "../shared/Button";
import H3 from "../shared/H3";
import Text from "../shared/Text";
import RoundedButton from "../shared/RoundedButton";
import { Container, Wrapper, P, Img } from "./CommunityElements";
import watching from "../../img/watching.png";

const Community = () => {
  return (
    <Container>
      <Wrapper>
        <Button>Community</Button>
        <H3>Join a growing community.</H3>
        <P>
          We're build a home for the next generation vinyl lovers and cassette
          junkies.
          <br /> Get in front of fans, connect with artists, labels and stores.
        </P>
        <RoundedButton>Browse artists</RoundedButton>
      </Wrapper>
      <Img src={watching} />
    </Container>
  );
};

export default Community;
