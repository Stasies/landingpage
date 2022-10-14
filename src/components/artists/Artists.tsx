import React, { useState } from "react";
import {
  Container,
  Section,
  P,
  Author,
  Img,
  IndexButtons,
  IndexButton,
} from "./ArtistsElements";
import Button from "../shared/Button";

const feedback = [
  {
    text: "The response was overwhelming. It made me wonder why I hadn't pressed any records on vinyl before now. It felt like something that people had been waiting for for a long time.",
    author: "SOL",
    bg: "rgb(255, 248, 4)",
    img: "https://images.prismic.io/qrates-prd/88610884-3509-4baa-aeb0-a49ed0c8300b_artist_sol.jpg?auto=compress,format",
  },
  {
    text: "“We hit our goal of 100 Records in the first 32 minutes. And I have to be honest, I didn't expect that. There's no world where I would have thought that we were about to sell north of 2800 copies.”",
    author: "—Mason Lieberman (The Real Folk Blues, 2020)",
    bg: "rgb(255, 103, 17)",
    img: "https://images.prismic.io/qrates-prd/86e9c6a8-3732-41a8-82e3-c63d3f97b45f_artist_mason.jpg?auto=compress,format",
  },
];

const Artists = () => {
  const [order, setOrder] = useState(0);
  return (
    <Container>
      <Section bg={feedback[order].bg}>
        <Button>artists on qrates</Button>
        <P>
          {feedback[order].text}
          <br />
          <Author>{feedback[order].author}</Author>
        </P>
        <IndexButtons>
          <IndexButton
            onClick={() => setOrder(0)}
            className={order === 0 ? "selected" : ""}
          >
            1
          </IndexButton>
          <IndexButton
            onClick={() => setOrder(1)}
            className={order === 1 ? "selected" : ""}
          >
            2
          </IndexButton>
        </IndexButtons>
      </Section>
      <Section bg={feedback[order].bg} className="img">
        <Img src={feedback[order].img} />
      </Section>
    </Container>
  );
};

export default Artists;
