import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

  :focus {
    outline: 0;
    box-shadown: 0 0 0 2px ${(props) => props.theme["green-500"]}
  }


  body {
    background-color: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-100"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem 'Fira Sans', sans-serif;
  }

  a {
    text-decoration: none;
    color: currentColor;
  }

  ul {
    list-style: none;
  }

  .container {
    max-width: 680px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .d-flex {
    display: flex;
  }

  .justify-center {
    justify-content: center;
  }

  .justify-space-between {
    justify-content: space-between;
  }

  .align-center {
    align-items: center;
  }

  .ff-mono {
    font-family: 'Fira Mono', monospace;
  }

  .ff-sans {
    font-family: 'Fira Sans', sans-serif;
  }

  .ff-serif {
    font-family: 'Lora', serif;
  }

  .fw-bold {
    font-weight: 700;
  }

  .fw-regular {
    font-weight: 400;
  }

  .fw-medium {
    font-weight: 500;
  }

  .fw-semibold {
    font-weight: 600;
  }

  .fs-sm {
    font-size: 0.875rem;
  }

  .fs-md {
    font-size: 1rem;
  }

  .fs-lg {
    font-size: 1.125rem;
  }

  .fs-xl {
    font-size: 1.25rem;
  }

  .fs-2xl {
    font-size: 1.5rem;
  }

  .fs-4xl {
    font-size: 1.875rem;
  }

  .fs-heading {
    font-size: 2.5rem;
  }
`;
