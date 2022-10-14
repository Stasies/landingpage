import React, { useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import logo from "../../../img/qrates-logo.svg";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import {
  MobileContainer,
  MobileWrapper,
  NavSection,
  NavSectionWrapper,
  Logo,
  Items,
  NavItems,
  NavItem,
  Menu,
  MenuItem,
  Icons,
  ImgContainer,
  Img,
  Buttons,
  RoundedButton,
} from "./MobileHeaderElements";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const MobileHeader = ({ openNav, setOpenNav }: any) => {
  const [openMenu, setOpenMenu] = useState<string | boolean>(false);
  const icon = useRef<any>();
  const icon2 = useRef<any>();
  const toggleMenu = (e: any, val: string | boolean) => {
    e.stopPropagation();
    setOpenMenu(val);
  };
  return (
    <MobileContainer>
      <MobileWrapper>
        <Logo src={logo} />
        <Items>
          <SearchIcon className="icon search" />
          <ShoppingCartOutlinedIcon className="icon" />
          <MenuIcon
            className="icon menu"
            onClick={() => setOpenNav(!openNav)}
          />
        </Items>
      </MobileWrapper>
      {openNav && (
        <NavSection>
          <NavSectionWrapper>
            <NavItems>
              <NavItem>records & cassettes</NavItem>
              <NavItem>discover</NavItem>
              <NavItem
                onClick={(e) =>
                  toggleMenu(e, openMenu === "artists" ? false : "artists")
                }
              >
                for artists
                <KeyboardArrowDownOutlinedIcon
                  ref={icon}
                  className={
                    openMenu === "artists" ? "is-active icon" : "hide icon"
                  }
                />
                {openMenu === "artists" && (
                  <Menu>
                    <MenuItem>Why Qrates?</MenuItem>
                    <MenuItem>Crowdfunding</MenuItem>
                    <MenuItem>Press & Sell</MenuItem>
                    <MenuItem>Our Services</MenuItem>
                    <MenuItem>Artist Toolkit</MenuItem>
                    <MenuItem>Referral Program</MenuItem>
                  </Menu>
                )}
              </NavItem>
              <NavItem
                onClick={(e) =>
                  toggleMenu(e, openMenu === "company" ? false : "company")
                }
              >
                our company{" "}
                <KeyboardArrowDownOutlinedIcon
                  ref={icon2}
                  className={
                    openMenu === "company" ? "is-active icon" : "hide icon"
                  }
                />
                {openMenu === "company" && (
                  <Menu>
                    <MenuItem>About Qrates</MenuItem>
                    <MenuItem>Careers</MenuItem>
                    <MenuItem>Partners</MenuItem>
                    <MenuItem>Contact</MenuItem>
                  </Menu>
                )}
              </NavItem>
            </NavItems>
            <Icons>
              <FacebookRoundedIcon className="social_media" />
              <InstagramIcon className="social_media" />
              <TwitterIcon className="social_media" />
            </Icons>
            <ImgContainer>
              <Img src="https://assets.qrates.com/packs/media/sticker/peace-00944d62.png" />
            </ImgContainer>
            <Buttons>
              <RoundedButton>log in</RoundedButton>
              <RoundedButton>make a record</RoundedButton>
            </Buttons>
          </NavSectionWrapper>
        </NavSection>
      )}
    </MobileContainer>
  );
};
export default MobileHeader;
