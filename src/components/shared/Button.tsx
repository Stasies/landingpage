import React from "react";
import styled from "styled-components";

const CommonButton = styled.div`
  padding: 9px 10px;
  border: 2px solid #000;
  font-size: 14px;
  letter-spacing: 0.18px;
  line-height: 14px;
  background-color: white;
  text-transform: uppercase;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  margin-bottom: 24px;
`;
type buttonProps = {
  children: string;
};
const Button = ({ children }: buttonProps) => {
  return <CommonButton>{children}</CommonButton>;
};

export default Button;
