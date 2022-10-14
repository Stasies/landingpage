import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;
export const Section = styled.div<{ bg: string }>`
  width: 50%;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  background-color: ${(props) => props.bg};
  :first-child {
    border-right: 2px solid black;
    padding: 40px 50px 42px 31px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    border: none;
    &.img {
      order: -1;
      margin: 0 auto;
    }
    :first-child {
      border: none;
    }
  }
`;
export const Author = styled.p`
  font-size: 20px;
  padding-top: 24px;
  font-weight: 800;
  margin: 0;
`;
export const P = styled.div`
  margin-bottom: 0;
  color: #000000;
  font-size: 28px;
  font-weight: normal;
  letter-spacing: -0.3px;
  line-height: 34px;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  padding-right: 10%;
`;
export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 875px;
  @media screen and (max-width: 992px) {
    width: 92%;
    height: 535px;
    margin: 30px 4% 0;
    outline: 2px solid black;
  }
`;

export const IndexButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  @media screen and (max-width: 992px) {
    padding-top: 100px;
  }
`;
export const IndexButton = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-weight: 700;
  font-family: "Nunito Sans", sans-serif;
  border: 2px solid black;
  color: black;
  background-color: transparent;
  &.selected {
    background-color: black;
    color: white;
  }
`;
