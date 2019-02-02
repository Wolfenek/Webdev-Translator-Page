import styled from 'styled-components'
import { media } from '../utils/media'
import { shadowBg } from '../utils/shadowBg'

const Container = styled.div`
  display: flex;
  /* below probably needed */
  flex-wrap: ${({wrapTrue}) => wrapTrue ? 'wrap': 'no-wrap'};
  width: 100%;
  padding: 0;
  margin: 0 auto;
  ${shadowBg}
  border-radius: 1%;

  @media (min-width: ${media.smallMin}) {
    max-width: 540px;
  }

  @media (max-width: ${media.smallMax}) {
    flex-direction: column;
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