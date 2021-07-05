import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;1,300;1,400&display=swap');
*{
  margin:0;
  padding:0;
  outline:none;
}
  html{
    font-size: 62.5%
  }
  body{
    height: 100%;
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${({ theme }) => theme.backgournd};
  }
  a{
    text-decoration: opacity 300ms ease-in-out;
    text-decoration: none;

    &:hover{
      opacity: .6;
    }
  }
  button{
    cursor: pointer;
  }
`;
