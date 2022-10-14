import React from "react";
import styled from "styled-components";

const TitleH3 = styled.h3`
  font-size: 40px;
  line-height: 40px;
  font-weight: 800;
  margin-bottom: 30px;
  margin-top: 0;
  font-family: "Nunito Sans", sans-serif;
  letter-spacing: -1px;

  @media screen and (max-width: 768px) {
    font-size: 36px;
    letter-spacing: -1px;
    line-height: 40px;
    text-align: center;
  }
`;
type h3Props = {
  children: any;
};
const H3 = ({ children }: h3Props) => {
  return <TitleH3>{children}</TitleH3>;
};

export default H3;
