// component might be deleted
import React from 'react'
import styled from 'styled-components'

const HeadingWord = styled.p`
  font-size: 0.8em;
  color: black;
`;

const MiniHeading = (props) => (
  <HeadingWord>{props.word}</HeadingWord>
)

export default MiniHeading