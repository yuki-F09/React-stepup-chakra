import React from 'react';
import './App.css';
import { ChakraProvider ,Button } from '@chakra-ui/react';
import { system } from './theme/theme';
function App() {
  return (
    <>
    <ChakraProvider value={system}>
    <div className="App">
      <Button>ボタン</Button>
      <h1>なんでもいい</h1>
    </div>

    </ChakraProvider>

    </>

  );
}

export default App;
