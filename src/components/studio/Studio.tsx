import React, { useEffect, useState } from "react";
import Button from "../shared/Button";
import H3 from "../shared/H3";
import { Container, Text, P, Img, BigButton } from "./StudioElements";
import sample1 from "../../img/sample_4.png";
import sample2 from "../../img/sample_all_india.png";
import sample3 from "../../img/sample_bombay.png";
import sample4 from "../../img/sample_female.png";
import dollar from "../../img/dollar.png";
import sparkle from "../../img/sparkle.png";
const Studio = () => {
  const images = [sample1, sample2, sample3, sample4];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let n = 0;
    var i = setInterval(function () {
      function loop(): any {
        setIndex(n);
        n++;
        if (n === 4) {
          n = 0;
        }
      }
      loop();
    }, 1000);
  }, []);

  return (
    <Container>
      <Button>qrates studio</Button>
      <Text>
        <H3>
          Make it real with
          <br />
          Qrates Studio
        </H3>
        <P>
          Design the look and feel of your vinyl and cassette and use the profit
          calculator to immediately see how much your project will cost, and how
          much you'll earn.
        </P>
        <Img src={images[index]} />
      </Text>
      <BigButton>Try it now</BigButton>
    </Container>
  );
};

export default Studio;
