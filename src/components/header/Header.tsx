import React, { useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import logo from "../../img/qrates-logo.svg";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

import {
  Container,
  Navigation,
  Logo,
  NavItems,
  NavItem,
  Menu,
  MenuItem,
  Buttons,
  Button,
  FilledButton,
} from "./HeaderElements";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<string | boolean>(false);
  const icon = useRef<any>();
  const icon2 = useRef<any>();
  const toggleMenu = (e: any, val: string | boolean) => {
    e.stopPropagation();
    setOpenMenu(val);
  };
  return (
    <Container onClick={(e) => toggleMenu(e, false)}>
      <Navigation>
        <Logo src={logo} />
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
          <SearchIcon />
          <ShoppingCartOutlinedIcon />
        </NavItems>
      </Navigation>
      <Buttons>
        <Button>log in</Button>
        <FilledButton>make your own</FilledButton>
      </Buttons>
    </Container>
  );
};

export default Header;
