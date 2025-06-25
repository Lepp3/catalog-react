import { createGlobalStyle, styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const StyledMain = styled.main`
  flex: 1;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: #356ec9;

  &:hover {
    color: #528deb;
  }
`;

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
    background-color: #e1e3de;
    font-size: 16px;
    height: 100%;
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
