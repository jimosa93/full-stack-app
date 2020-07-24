import React from 'react';
import './App.css';
import Todos from './components/Todos';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Todos />
      </div>
    </GlobalProvider>
  );
}

export default App;
