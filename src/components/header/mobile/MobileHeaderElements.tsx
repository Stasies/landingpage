import styled from "styled-components";

export const MobileContainer = styled.div`
  width: 100%;
`;
export const MobileWrapper = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  background-color: white;
  top: 0;
  padding: 0px 20px;
  box-sizing: border-box;
  z-index: 100;
`;
export const Logo = styled.img`
  width: 30px;
  height: 45px;
`;
export const Items = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  .icon {
    height: 40px;
    width: 30px;
  }
  .search {
    width: 40px;
  }
  .menu {
    width: 40px;
    height: 40px;
    margin-left: 20px;
  }
`;
export const NavSection = styled.div`
  height: calc(100vh - 65px);
  width: 100%;
  position: fixed;
  top: 65px;
  background-color: white;
  border-top: 3px solid black;
  overflow: scroll;
  z-index: 100;
`;
export const NavSectionWrapper = styled.div`
  width: 100%;
  height: 200px;
  height: max-content;
  padding: 30px 20px 35px;
  box-sizing: border-box;
`;
export const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  font-family: "Nunito Sans", sans-serif;
  text-transform: uppercase;
  font-weight: 900;
  gap: 25px;
  z-index: 10;
`;
export const NavItem = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const Menu = styled.div`
  padding: 20px 20px 0;
  text-transform: capitalize;
  font-weight: 600;
`;
export const MenuItem = styled.div`
  margin-bottom: 16px;
`;

export const Icons = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  .social_media {
    width: 42px;
    height: 42px;
  }
`;
export const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;
export const Img = styled.img`
  width: 116px;
  object-fit: contain;
  right: 20px;
`;
export const Buttons = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RoundedButton = styled.button`
  display: block;
  height: 60px;
  border: 2px solid #000000;
  border-radius: 60px;
  line-height: 56px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  :first-child {
    color: #000000;
    background-color: white;
  }
  :last-child {
    color: white;
    background-color: #000;
  }
`;
