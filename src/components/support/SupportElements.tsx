import styled from "styled-components";

export const ImgContainer = styled.div`
  height: 400px;
  margin: 34px 32px 0;
  width: calc(100% - 64px);
  overflow: hidden;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;
export const Img = styled.img`
  width: 100%;
  box-sizing: border-box;
  object-fit: cover;
  &.girl_img {
    border: 2px solid black;
  }
  &.black_img {
    height: 100%;
  }
`;

export const Container = styled.div``;
export const Sections = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;
export const Section = styled.div<{ bg: string }>`
  flex: 1;
  background-color: ${(props) => props.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  text-align: center;
  &:first-child {
    border-right: 2px solid black;
  }
`;
export const BackgroundImg = styled.img`
  background-size: cover;
  background-position: center;
  height: 400px;
  background-repeat: no-repeat;
`;
export const TextContent = styled.div`
  padding: 94px 8% 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 992px) {
    padding: 60px 6%;
  }
`;
export const P = styled.p<{ color: string }>`
  margin-bottom: 30px;
  font-weight: 600;
  line-height: 30px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 20px;
  color: ${(props) => props.color};
`;

export const H3 = styled.h3<{ color: string }>`
  font-size: 40px;
  line-height: 40px;
  font-weight: 800;
  margin-bottom: 30px;
  margin-top: 0;
  font-family: "Nunito Sans", sans-serif;
  letter-spacing: -1px;
  color: ${(props) => props.color};
`;
