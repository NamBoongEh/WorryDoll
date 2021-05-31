import React from 'react';
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
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaGithub } from 'react-icons/fa';

const Footer = () => {
  // 로고 클릭시 가장 위로 올라오게하는 이벤트
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap
        style={{
          backgroundColor: 'black',
          color: 'white',
          fontSize: '20px',
          textAlign: 'center',
          lineHeight: '2rem',
          padding: '2rem 0'
        }}
      >
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo
              to="/"
              onClick={toggleHome}
              style={{ display: 'block' }}
            >
              WORRYDOLL
            </SocialLogo>
            <WebsiteRights>WORRYDOLL © 2021 All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://m.facebook.com/home.php?ref=wizard"
                target="_blank"
                aria-label="Facebook"
                style={{ marginRight: '10px' }}
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/NamBoongEh"
                target="_blank"
                aria-label="Github"
                style={{ marginRight: '10px' }}
              >
                <FaGithub />
              </SocialIconLink>
              SoYeon Nam
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
