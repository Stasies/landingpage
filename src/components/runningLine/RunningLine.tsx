import React, { useEffect, useRef } from "react";
import { Container, Wrapper, Item, Underlined } from "./RunningLineElements";

const RunningLine = () => {
  const wrapper = useRef<HTMLDivElement>(null);
  return (
    <Container>
      {[...Array(3)].map((n) => (
        <Wrapper ref={wrapper} className="first">
          <Item>
            <Underlined>Chillhop</Underlined> is on qrates
          </Item>
          <Item>
            <Underlined>Chilled</Underlined> cow on qrates
          </Item>
          <Item>
            <Underlined>Sol</Underlined> is on qrates
          </Item>
          <Item>
            <Underlined>vuflpeck</Underlined> is on qrates
          </Item>
        </Wrapper>
      ))}
      {/* {[...Array(1)].map((n) => (
        <Wrapper ref={wrapper} className="second">
          <Item>
            <Underlined>Chillhop</Underlined> is on qrates
          </Item>
          <Item>
            <Underlined>Chilled</Underlined> cow on qrates
          </Item>
          <Item>
            <Underlined>Sol</Underlined> is on qrates
          </Item>
          <Item>
            <Underlined>vuflpeck</Underlined> is on qrates
          </Item>
        </Wrapper>
      ))} */}
    </Container>
  );
};

export default RunningLine;
