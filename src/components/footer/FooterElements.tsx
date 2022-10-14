import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: #ffffff;
  background-color: #000000;
`;
export const Wrapper = styled.div`
  padding: 78px 60px 84px 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Nunito Sans", sans-serif;

  @media screen and (max-width: 768px) {
    padding: 26px 4% 32px;
  }
`;
export const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Nunito Sans", sans-serif;
  flex-wrap: wrap;
`;
export const Ul = styled.ul`
  flex: 1;
  padding: 0;
  @media screen and (max-width: 768px) {
    min-width: 45%;
  }
`;
export const Li = styled.li`
  list-style: none;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.27px;
  line-height: 28px;
  letter-spacing: -0.27px;
  line-height: 36px;
`;

export const P = styled.p`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  margin-bottom: 24px;
  font-weight: 600;
  line-height: 30px;
  color: white;
  font-size: 20px;
`;
export const FooterBottom = styled.div`
  margin-top: 292px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 60px;
  }
`;
export const Logo = styled.img`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;
`;
export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  .icon {
    :not(:nth-child(2n)) {
      margin-left: 6px;
    }
    :nth-child(2n) {
      margin-left: 2px;
    }
  }
  .rounded {
    padding: 8px;
    background-color: white;
    color: black;
    border-radius: 50%;
  }
  .facebook {
    width: 46px;
    height: 46px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const LegalNav = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 28px;
  font-size: 14px;
`;
export const NavItem = styled.li`
  list-style: none;
  font-weight: 700;
`;
