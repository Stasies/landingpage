import styled from "styled-components";

export const Container = styled.div`
  height: fit-content;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;
export const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #000000;
  padding: 87px 30px;
  @media screen and (max-width: 768px) {
    border-top: none;
    padding: 60px 20px;
  }
`;
export const Sections = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;
export const Section = styled.div`
  flex: 1;
  padding: 94px auto;
  width: 120px;
`;
export const P = styled.p`
  color: #000000;
  font-size: 20px;
  font-weight: normal;
  letter-spacing: -0.27px;
  line-height: 28px;
  margin: 0;
  padding: 0;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  &.info_text {
    color: white;
    flex: 2;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
    letter-spacing: -0.3px;
    line-height: 24px;
  }
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 30px;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 72px 8% 85px;
  box-sizing: border-box;
  width: 100%;
  background-color: black;
  color: white;
  justify-content: space-between;
`;
export const Link = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  font-family: "Montserrat", sans-serif;
  text-decoration: underline;
  font-weight: 600;
  padding-bottom: 4px;
`;
