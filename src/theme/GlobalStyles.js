import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: ${({ theme }) => theme.colors.ink};
    background: ${({ theme }) => theme.colors.background};
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  button,
  input,
  select {
    font: inherit;
  }

  a {
    color: inherit;
  }
`;
