import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    // this is the shared style
  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

h1 {
    color: #4ec95f !important; // the important is just to show that the style works!
}

  // anything else you would like to include
`;

const BasicLayout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default BasicLayout;
