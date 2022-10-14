import styled from "styled-components";

export const Container = styled.div`
  height: fit-content;
  font-family: "Nunito Sans", sans-serif;
  box-sizing: border-box;
  padding: 130px 0 0;
  overflow: hidden;
`;
export const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  height: min-content;

  @media screen and (max-width: 992px) {
    :first-child {
      flex-direction: column;
    }
  }
`;
export const Left = styled.div`
  box-sizing: border-box;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 4% 20% 30px;
  height: fit-content;
  @media screen and (max-width: 992px) {
    width: 100%;
    padding: 0 6% 50px;
  }
`;
export const P = styled.p`
  padding: 0;
  font-size: 28px;
  font-weight: 600;
  line-height: 34px;
  @media screen and (max-width: 768px) {
    font-size: 22px;
    letter-spacing: -0.37px;
    line-height: 24px;
    font-weight: 700;
  }
`;
export const Right = styled.div`
  width: 50%;
  overflow-y: visible;

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;
export const ImgContainer = styled.div<{ rotate: string }>`
  width: 100%;
  rotate: ${(props) => props.rotate};
  min-height: fit-content;
  padding: 0.5px 0.5px 0;
  width: fit-content;
  height: fit-content;
  &.img_container_bottom {
    translate: 20% -40%;
  }
  @media screen and (max-width: 992px) {
    width: 68%;
    margin-left: auto;
    &.img_container_bottom {
      width: 68%;
      translate: -44% -20%;
    }
  }
`;
export const Img = styled.img`
  width: auto;
  width: 100%;
  border: 2px solid black;
  &.logo {
    border: none;
  }
`;
export const H2 = styled.h2`
  font-size: 64px;
  font-weight: 800;
  letter-spacing: -2px;
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: 44px;
    letter-spacing: -1.38px;
    line-height: 44px;
  }
`;

export const Logo = styled.div`
  width: 20%;
  padding: 8% 20% 0 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  right: 0;
  @media screen and (max-width: 992px) {
    padding: 12% 6% 0 0;
  }
`;
