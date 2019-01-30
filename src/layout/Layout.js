import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    color: white;
    font-family: 'Arial';
    background-color: #2e2d2e;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const Layout = ({children}) => (
  <>
  <GlobalStyle />
    {children}
  </>
)

export default Layout;