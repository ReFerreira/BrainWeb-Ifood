import React from 'react';
import GlobalStyle from './styles/global';
import Routes from './routes';
import OrderProvider from './context/resumeContext';

function src() {
  return (
    <>
      <OrderProvider>
        <GlobalStyle />
        <Routes />
      </OrderProvider>
    </>
  );
}

export default src;
