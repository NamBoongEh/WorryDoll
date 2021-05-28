import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Me</FooterLinkTitle>
              <FooterLink to="/register">About us</FooterLink>
              <FooterLink to="/register">How it works</FooterLink>
              <FooterLink to="/register">Testimonial</FooterLink>
              <FooterLink to="/register">Careers</FooterLink>
              <FooterLink to="/register">Investors</FooterLink>
              <FooterLink to="/register">Terms of Service</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>About Me</FooterLinkTitle>
              <FooterLink to="/register">About us</FooterLink>
              <FooterLink to="/register">How it works</FooterLink>
              <FooterLink to="/register">Testimonial</FooterLink>
              <FooterLink to="/register">Careers</FooterLink>
              <FooterLink to="/register">Investors</FooterLink>
              <FooterLink to="/register">Terms of Service</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>About Me</FooterLinkTitle>
              <FooterLink to="/register">About us</FooterLink>
              <FooterLink to="/register">How it works</FooterLink>
              <FooterLink to="/register">Testimonial</FooterLink>
              <FooterLink to="/register">Careers</FooterLink>
              <FooterLink to="/register">Investors</FooterLink>
              <FooterLink to="/register">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">WORRYDOLL</SocialLogo>
            <WebsiteRights>WORRYDOLL © 2021 All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Github">
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
