import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routes';
import GlobalStyle from './Styles/global';
import Header from './components/Header';
import { CartContextProvider } from './context/cart';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Routing />
      </BrowserRouter>
      <GlobalStyle />
    </CartContextProvider>
  );
}

export default App;
