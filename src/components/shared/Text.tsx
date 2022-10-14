import React from "react";
import styled from "styled-components";

type textProps = {
  children: string;
};
const P = styled.p`
  margin-bottom: 30px;
  font-weight: 600;
  line-height: 30px;
  font-family: "Nunito Sans", sans-serif;
  color: #000000;
  font-size: 20px;
`;
const Text = ({ children }: textProps) => {
  return <P>{children}</P>;
};

export default Text;
