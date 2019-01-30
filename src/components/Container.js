import styled from 'styled-components'
import { media } from '../utils/media'

const Container = styled.div`
  display: flex;
  flex-wrap: ${({wrapTrue}) => wrapTrue ? 'wrap': 'no-wrap'};
  width: 100%;
  padding: 0;
  margin: 0 auto;
  background: #1a191a;
  box-shadow: 0 0 10px 2px rgba(13,13,13,1);
  border-radius: 1%;

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

export default Container