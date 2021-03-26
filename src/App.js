import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import theme from './theme';

import './mock';

function App() {
  return(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sign-in" element={<SignIn />}/>
          <Route path="*" element={<h1>Pagina não encontrada!</h1>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
