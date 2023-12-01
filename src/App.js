import React from 'react';
import { Balance } from './Components/Balance';
import { Expense } from './Components/Expense';
import { Form } from './Components/Form';
import { Show } from './Components/Show';

import { AppProvider } from './Context/AppContext';

import './App.css';

function App() {
  return (
    <AppProvider>
    <div className="blr h-screen m-auto w-1/2">
      <Balance />
      <Expense />
      <Form />
      <Show />
    </div>
    </AppProvider>
  );
}

export default App;
