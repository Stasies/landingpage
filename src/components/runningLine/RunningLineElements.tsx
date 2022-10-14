import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;
export const Wrapper = styled.div`
  padding: 80px 0;
  padding-left: 60px;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 60px;
  translate: 0 0;
  animation-name: slide;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  @keyframes slide {
    100% {
      translate: -100% 0;
    }
  }
`;
export const Item = styled.div`
  text-transform: uppercase;
  width: max-content;
  font-weight: 700;
  font-size: 20px;
  font-family: "Nunito Sans", sans-serif;
`;
export const Underlined = styled.span`
  text-decoration: underline;
`;
