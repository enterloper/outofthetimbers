import React from 'react';
import styled from 'styled-components';
import InstagramLogo from 'assets/images/instagram-logo';

const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 140px;
    padding: 0 40px;
`;

const SocialMedia = styled.div`
`;

const Footer = () => (
  <FooterWrapper>
    <SocialMedia><InstagramLogo /></SocialMedia>
  </FooterWrapper>
);

export default Footer;
