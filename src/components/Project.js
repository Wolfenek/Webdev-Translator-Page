import React from 'react'
import styled from 'styled-components'

const ProjectBox = styled.div`
  flex: 0 1 25%;
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
    {/* Project 1 img */}
    <ProjectBox> 
      <ProjectImage
        src='http://lorempixel.com/250/250/transport/'
        alt='wolfenek webdeb project'
      ></ProjectImage>
    </ProjectBox>
    {/* Project 1 text */}
    <ProjectBox>
      <ProjectDescription>
        <ul style={{listStyle: 'none'}}>
          <li>Project built bla bla</li>
          <li>Tech used bla bla</li>
          <li>123</li>
        </ul>
      </ProjectDescription>
    </ProjectBox>
    {/* Project 2 img */}
    <ProjectBox> 
      <ProjectImage
        src='http://lorempixel.com/250/250/animals/'
        alt='wolfenek webdeb project'
      >
      </ProjectImage>
    </ProjectBox>
    <ProjectBox>
    {/* Project 2 text */}
      <ProjectDescription>
        Samle project 2. Used: HTML, CSS, React
      </ProjectDescription>
    </ProjectBox>
  </>
)

export default Project