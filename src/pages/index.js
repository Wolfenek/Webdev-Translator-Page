import React from 'react'
// import { Link } from 'gatsby'
import SEO from '../components/seo'
import Header from '../components/Header'
import Layout from '../layout/Layout';
import Container from '../components/Container';
import Item1 from '../components/Item1';
import Item2 from '../components/Item2';

const WebDevelopment = () => (
  <>
    <SEO title="Web developer" keywords={[`frontend`, `programming`, `webdevelopment`, `reactjs`]} />
    <Layout>
      <Header>
        hi
      </Header>
      <Container wrapTrue>
        <Item1>
          <h1>Hello world, we code the universe</h1>
          <hr></hr>
          <h3>Contact me for the juice</h3>
        </Item1>
        <Item2>
          <img src={'http://lorempixel.com/300/300/sports/'}></img>
        </Item2>
      </Container>
    </Layout>
  </>
)

export default WebDevelopment