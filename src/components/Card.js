import React from 'react'
import styled from 'styled-components'

const CardBox = styled.div`
  position: relative;
  min-width: 50%;
  height: 225px;
  margin: 40px auto 10px 0;
  border: 4px orange solid;
`;

// const CardImage = styled.div`
//   float: left;
//   position: absolute;
//   left: 30px;
//   top: -30px;
//   height: 80%;
//   width: 370px;
//   border: 4px purple solid;
// `;

const ActualImage = styled.img`
  /* make parent relative units */
  max-height: 200px;
  max-width: 200px;
  position: absolute;
  left: 6%;
  top: -12%;
`;

const Card = () => (
  <>
    <CardBox>
      {/* <CardImage> */}
        <ActualImage
          src='http://lorempixel.com/250/250/transport/'
          alt='wolfenek webdeb project'
        ></ActualImage>
      {/* </CardImage> */}
    </CardBox>
    <CardBox>
      {/* <CardImage> */}
        <ActualImage
          src='http://lorempixel.com/250/250/transport/'
          alt='wolfenek webdeb project'
        ></ActualImage>
      {/* </CardImage> */}
    </CardBox>
  </>
)

export default Card