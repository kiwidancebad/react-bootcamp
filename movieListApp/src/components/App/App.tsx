import React from 'react';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../../themes';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');

  body {
    font-family: 'Open Sans', Arial, sans-serif;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
