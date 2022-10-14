import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const Item = styled.div`
  width: 25%;
`;
export const Img = styled.img`
  width: 25%;
  object-fit: cover;
  aspect-ratio: 1;
  outline: 2px solid black;

  @media screen and (max-width: 992px) {
    width: 50%;
  }
`;
