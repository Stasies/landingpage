import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 118px 34px 160px 34px;
  @media sreen and (max-width: 992px) {
    max-width: 60%;
  }
  @media sreen and (max-width: 768px) {
    max-width: 70%;
  }
`;
export const Text = styled.div`
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 105px;
`;
export const P = styled.p`
  color: white;
  max-width: 700px;
  text-align: center;
  margin-bottom: 80px;
  font-size: 20px;
  font-weight: normal;
  letter-spacing: -0.27px;
  line-height: 28px;
  font-family: "Nunito Sans", sans-serif;
`;

export const Img = styled.img`
  width: 100%;
`;
export const BigButton = styled.button`
  min-width: 366px;
  height: 75px;
  line-height: 75px;
  border-radius: -webkit-calc(366px / 2);
  border-radius: calc(366px / 2);
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.18px;
  text-align: center;
  cursor: pointer;
  color: black;
  background-color: yellow;
  text-transform: uppercase;
  font-family: "Nunito Sans", sans-serif;
`;
