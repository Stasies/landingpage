import React from "react";
import styled from "styled-components";

const RoundedButton = styled.div`
  min-width: 267px;
  border-radius: -webkit-calc(267px / 2);
  border-radius: calc(267px / 2);
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.18px;
  text-align: center;
  cursor: pointer;
  border: 2px solid black;
  text-transform: uppercase;
  font-family: "Nunito Sans", sans-serif;
  line-height: 46px;
`;
type buttonProps = {
  children: string;
};

const Button = ({ children }: buttonProps) => {
  return <RoundedButton>{children}</RoundedButton>;
};

export default Button;
