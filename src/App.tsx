import React from 'react';
import logo from './logo.svg';
import { MyForm } from './components/MyForm';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <MyForm
          className="App-link" 
          firstName='name'
          lastName='last'
        >
          Learn React
        </MyForm>
      </header>
    </div>
  );
}

export default App;
