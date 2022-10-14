import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 87px 0;
  position: relative;
`;
export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const P = styled.p`
  margin-bottom: 30px;
  font-weight: 600;
  line-height: 30px;
  font-family: "Nunito Sans", sans-serif;
  color: #000000;
  font-size: 20px;
`;

export const Img = styled.img`
  width: 14%;
  right: 6%;
  bottom: -15%;
  position: absolute;
  max-width: 200px;
  z-index: 2;

  @media screen and (max-width: 992px) {
    width: 30%;
    max-width: 150px;
    right: 9%;
    bottom: -17%;
  }
  @media screen and (max-width: 532px) {
    width: 40%;
    bottom: -10%;
  }
`;
