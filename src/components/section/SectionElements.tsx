import styled from "styled-components";

export const Container = styled.div<{ bg: string }>`
  flex: 1;
  padding: 94px 8% 76px;
  background-color: ${(props) => props.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  &:first-child {
    border-right: 2px solid black;
  }
  @media screen and (max-width: 992px) {
    &:first-child {
      border-right: none;
    }
  }
`;
export const P = styled.p`
  margin-bottom: 33px;
  color: #000000;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.27px;
  text-align: center;
  line-height: 28px;
`;
export const Img = styled.img`
  max-height: 266px;
`;
