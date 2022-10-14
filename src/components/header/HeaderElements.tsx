import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  padding: 0 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: "Nunito Sans", sans-serif;
  text-transform: uppercase;
`;
export const Logo = styled.img`
  width: 38px;
`;
export const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 44px;
`;
export const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 28px;
`;
export const NavItem = styled.div`
  font-weight: 700;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  .icon {
    animation-fill-mode: forwards;
    animation-duration: 600ms;
    transform-origin: center;
    &.is-active {
      animation-name: rotate;
    }
    &.hide {
      animation-name: rotateback;
    }
    @keyframes rotate {
      to {
        rotate: -180deg;
      }
    }
    @keyframes rotateback {
      from {
        rotate: -180deg;
      }
      to {
        rotate: 0deg;
      }
    }
  }
`;
export const Menu = styled.div`
  background-color: black;
  position: absolute;
  color: white;
  display: flex;
  flex-direction: column;
  top: 100%;
  padding: 20px;
  gap: 16px;
  width: max-content;
  text-transform: capitalize;
  font-size: 20px;
`;
export const MenuItem = styled.div`
  cursor: pointer;
  :first-child {
    text-decoration: underline;
  }
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 22px;
`;
export const Button = styled.div`
  margin-left: auto;
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
  color: #000000;
  cursor: pointer;
  white-space: nowrap;
`;
export const FilledButton = styled.button`
  background-color: black;
  color: white;
  padding: 0 32px 0 32px;
  border-radius: -webkit-calc(174px / 2);
  border-radius: calc(174px / 2);
  line-height: 48px;
  text-transform: uppercase;
  font-weight: 700;
`;
