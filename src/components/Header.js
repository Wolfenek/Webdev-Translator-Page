import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { navbars } from '../utils/navbars'
import { media } from '../utils/media'

const Header = styled.div`
  width: 100%;
  background: ${navbars.dev};
  min-height: 40px;
  border-bottom: 1px solid black;
`;

const NavList = styled.ul`
  min-height: inherit;
  display: flex;
  align-items: center;
  flex-wrap: ${({wrapTrue}) => wrapTrue ? 'wrap': 'no-wrap'};
  width: 100%;
  padding: 0 1%;
  margin: 0 auto;
  list-style: none;  
  border: 3px solid yellowgreen;

  @media (min-width: ${media.smallMin}) {
    max-width: 540px;
  }

  @media (min-width: ${media.mediumMin}) {
    max-width: 720px;
  }

  @media (min-width: ${media.largeMin}) {
    max-width: 960px;
  }

  @media (min-width: ${media.xl}) {
    max-width: 1160px;
  }
`;

const WebSiteLogo = styled.li`
  color: white;
  text-decoration: none;
  font-size: 1.2em;
  margin-right: auto;
  flex-basis: 75%;
`;

const LinksInNav = styled.li`
  color: white;
  text-decoration: none;
  margin: 0 12px 0 auto;
  :last-child {
    margin: 0 0 0 auto;
  }
`;

const Navigation = () => (
  <>
  <Header>
    <NavList>
        <WebSiteLogo as={Link} to="/">adaptino.com</WebSiteLogo>
        <LinksInNav as={Link} to="/page-2">Developer</LinksInNav>
        <LinksInNav as={Link} to="/page-2">Translator</LinksInNav>
        <LinksInNav as={Link} to="/page-2">More</LinksInNav>
    </NavList>
  </Header>
 </>
)


export default Navigation

// @media (min-width: ${media.smallMin}) {
//   max-width: 540px;
// }

// @media (min-width: ${media.mediumMin}) {
//   max-width: 720px;
// }

// @media (min-width: ${media.largeMin}) {
//   max-width: 960px;
// }

// @media (min-width: ${media.xl}) {
//   max-width: 1160px;
// }