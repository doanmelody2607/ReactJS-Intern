import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
<<<<<<< HEAD
  background-color: #f5f4f4;
=======
  background-color: #101522;
>>>>>>> da70d5d7f78175deba5e50d37b87b7f99ac7528f
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
<<<<<<< HEAD
  color: #080808;
=======
  color: #fff;
>>>>>>> da70d5d7f78175deba5e50d37b87b7f99ac7528f

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
<<<<<<< HEAD
  color: #080808;
=======
  color: #fff;
>>>>>>> da70d5d7f78175deba5e50d37b87b7f99ac7528f
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
<<<<<<< HEAD
  color: #080808;
=======
  color: #fff;
>>>>>>> da70d5d7f78175deba5e50d37b87b7f99ac7528f
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
<<<<<<< HEAD
  color: #080808;
=======
  color: #fff;
>>>>>>> da70d5d7f78175deba5e50d37b87b7f99ac7528f
  margin-bottom: 16px;
`;

export const SocialIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
<<<<<<< HEAD
  color: #080808;
=======
  color: #fff;
>>>>>>> da70d5d7f78175deba5e50d37b87b7f99ac7528f
  font-size: 24px;
`;
