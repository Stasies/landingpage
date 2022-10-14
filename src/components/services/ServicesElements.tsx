import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled.div`
  padding: 8% 4% 8% 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const Heading = styled.h3`
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-color: black;
  -webkit-text-stroke-width: 2px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 40px;
  margin: 0;
  margin-bottom: 30px;
  text-transform: uppercase;
  font-weight: 800;
`;
export const ImgContainer = styled.div`
  rotate: -5deg;
  margin: 52px auto 68px;
  width: 60%;
  padding: 1px;
  padding-bottom: 0;
  border: 1px solid black;

  @media screen and (max-width: 992px) {
    order: 4;
    margin: 40px 4% 0px;
  }
`;
export const Img = styled.img`
  object-fit: cover;
  width: 100%;
`;
export const Right = styled.div`
  flex: 1;
`;
export const ServicesTabs = styled.div`
  border: 2px solid black;
  margin: 120px 8%;

  @media screen and (max-width: 992px) {
    margin: 20px 4% 80px;
  }
`;
export const TabsCategory = styled.div``;
export const Category = styled.div`
  font-size: 28px;
  font-weight: bold;
  letter-spacing: -0.3px;
  line-height: 34px;
  display: block;
  padding: 30px 60px 30px 20px;
  background: #000000;
  color: #ffffff;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-family: "Nunito Sans", sans-serif;
`;
export const TabsItems = styled.div`
  width: 100%;
`;
export const Item = styled.div`
  font-family: "Nunito Sans", sans-serif;
  width: 100%;
  box-sizing: border-box;
  color: #000000;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.27px;
  display: block;
  background: #ffffff;
  text-align: left;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  :not(:last-child) {
    border-bottom: 2px solid black;
  }
  transition-duration: 1s;
`;
export const ItemButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
  font-weight: 800;
  .icon {
    width: 18px;
  }
`;
export const More = styled.div``;
export const Content = styled.div`
  margin-bottom: 30px;
  font-weight: 600;
  line-height: 30px;
  font-family: "Nunito Sans", sans-serif;
  color: #000000;
  font-size: 20px;
`;
export const Link = styled.div`
  text-transform: uppercase;
  text-decoration: underline;
  font-size: 16px;
  font-weight: 800;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  .arrow_right {
    width: 12px;
  }
`;
