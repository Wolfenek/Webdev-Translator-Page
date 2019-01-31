import styled from 'styled-components'
import { media } from '../utils/media'

const Item2 = styled.div`
  flex-grow: 1;
  margin: 1%;
  text-align: center;

  @media (max-width: ${media.smallMax}) {
    order: -1;
  }
`;

export default Item2