import styled from 'styled-components'
import { media } from '../utils/media'

// it actually doesn't need to be flex
const InfoBar = styled.div`
  width: 100%;
  margin: 15px auto 0 auto;
  line-height: 23px;
  height: 23px;
  background: silver;
  box-shadow: none;
  border-radius: 2%;

  @media (min-width: ${media.smallMin}) {
    max-width: 542px;
  }

  @media (min-width: ${media.mediumMin}) {
    max-width: 722px;
  }

  @media (min-width: ${media.largeMin}) {
    max-width: 962px;
  }

  @media (min-width: ${media.xl}) {
    max-width: 1162px;
  }
`;

export default InfoBar