import React from 'react'
import styled from 'styled-components'

const ProjectBox = styled.div`
  flex-grow: 1;
  text-align: center;
`;
const ProjectImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  text-align: center;
  margin: 0 auto;
`;
const ProjectDescription = styled.p`

`;

const Project = () => (
  <>
    {/* Project 1 */}
    <ProjectBox> 
      <ProjectImage
        src='http://lorempixel.com/250/250/transport/'
        alt='wolfenek webdeb project'
      >
      </ProjectImage>
      <ProjectDescription>
        Samle project 1. Used: HTML, SASS, jQuery
      </ProjectDescription>
    </ProjectBox>
    {/* Project 2 */}
    <ProjectBox> 
      <ProjectImage
        src='http://lorempixel.com/250/250/animals/'
        alt='wolfenek webdeb project'
      >
      </ProjectImage>
      <ProjectDescription>
        Samle project 2. Used: HTML, CSS, React
      </ProjectDescription>
    </ProjectBox>
  </>
)

export default Project