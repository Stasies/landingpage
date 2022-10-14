import React from "react";
import {
  Container,
  Wrapper,
  FooterTop,
  FooterBottom,
  Ul,
  Li,
  P,
  Logo,
  Info,
  Icons,
  LegalNav,
  NavItem,
} from "./FooterElements";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "../../img/qrates-logo-footer.svg";
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FooterTop>
          <Ul>
            <Li>
              <P>For artists</P>
            </Li>
            <Li>Why Qrates?</Li>
            <Li>Crowdfunding</Li>
            <Li>Press & Sell</Li>
            <Li>Our Services</Li>
            <Li>Artist Toolkit</Li>
            <Li>Referral Program</Li>
          </Ul>
          <Ul>
            <Li>
              <P>For fans</P>
            </Li>
            <Li>Discover</Li>
            <Li>Records</Li>
            <Li>Stories</Li>
            <Li>Lists</Li>
            <Li>Artist & Labels</Li>
          </Ul>
          <Ul>
            <Li>
              <P>our company</P>
            </Li>
            <Li>About Qrates</Li>
            <Li>Careers</Li>
            <Li>Partners</Li>
          </Ul>
          <Ul>
            <Li>
              <P>help</P>
            </Li>
            <Li>Support Center</Li>
            <Li>Contact Us</Li>
            <Li>Returns</Li>
            <Li>Shipping</Li>
          </Ul>
        </FooterTop>
        <FooterBottom>
          <Logo src={logo} />
          <Info>
            <Icons>
              <FacebookRoundedIcon className="icon facebook" />
              <InstagramIcon className="icon rounded" />
              <TwitterIcon className="icon rounded" />
            </Icons>
            <LegalNav>
              <NavItem>Terms of Service</NavItem>
              <NavItem>Privacy Policy</NavItem>
              <NavItem>Legal Information</NavItem>
              <NavItem>TDMS Inc.</NavItem>
            </LegalNav>
          </Info>
        </FooterBottom>
      </Wrapper>
    </Container>
  );
};

export default Footer;
