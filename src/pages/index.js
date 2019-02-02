import React from 'react'
// import { Link } from 'gatsby'
import SEO from '../components/seo'
import Header from '../components/Header'
import Layout from '../layout/Layout';
import Container from '../components/Container';
import Item1 from '../components/Item1';
import Item2 from '../components/Item2';
import Item3 from '../components/Item3';
import InfoBar from '../components/InfoBar';
import Project from '../components/Project';

const WebDevelopment = () => (
  <>
    <SEO title="Web developer" keywords={[`frontend`, `programming`, `webdevelopment`, `reactjs`]} />
    <Layout>
      <Header />
      {/* Start Section 1 */}
      <InfoBar>
        <h3 style={{fontSize: '0.8em', color: 'black', margin: '0', textAlign: 'left', marginLeft: '1%'}}>Hello there</h3>
      </InfoBar>
      <Container>
        <Item1>
          <h1>Hello world, I'm coder </h1>
          <p>I like to bla bla bla and also lorem pixel lorem pixel lorem pixel lorem pixel lorem pixel lorem pixel lorem pixel lorem pixel lorem pixel lorem pixel lorem pixel lorem pixel lorem pixel lorem pixel lorem pixel lorem pixel lorem pixel </p>
          <hr></hr>
          <h3>Contact me for the juice rock rock rock rock rock rock rock rock rock rock rock </h3>
        </Item1>
        <Item2>
          <img src={'http://lorempixel.com/300/300/sports/'}></img>
        </Item2>
      </Container>
      {/* Start Section 2 */}
      <InfoBar>
        <h3 style={{fontSize: '0.8em', color: 'black', margin: '0', textAlign: 'left', marginLeft: '1%'}}>Grid here</h3>
      </InfoBar>
      <Container wrapTrue>
        {/* <Item3>
          <h1>Hello world, I'm coder </h1>
          <p>I like to bla bla bla and also lorem pixel lorem pixel lorem pixel lorem pixel lorem pixel lorem pixel lorem pixel lorem pixel lorem pixel lorem pixel lorem pixel lorem pixel lorem pixel lorem pixel lorem pixel lorem pixel lorem pixel </p>
          <hr></hr>
          <h3>Contact me for the juice rock rock rock rock rock rock rock rock rock rock rock </h3>
        </Item3> */}
        <Project />
      </Container>
    </Layout>
  </>
)

export default WebDevelopment