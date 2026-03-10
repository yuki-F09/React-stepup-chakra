import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter} from 'react-router-dom';


import { system } from './theme/theme';
import { Router } from "./router/Router"


function App() {
  return (
    <>
    <ChakraProvider value={system}>
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>

    </div>

    </ChakraProvider>

    </>

  );
}

export default App;
