import { createGlobalStyle, styled } from "styled-components";
import { Link } from "react-router-dom";


export const StyledLink = styled(Link)`
text-decoration: none;
font-weight: bold;
color: #356ec9;

&:hover{
color: #528deb
}
`

export const GlobalStyle = createGlobalStyle`
*,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Inter', sans-serif;
    background-color: #fff;
    font-size: 16px;
    height: 100vh;
}
    a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }
`;


export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;            
  padding: 1rem;             
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`