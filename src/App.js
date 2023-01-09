import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Work from './components/Work';
import React from 'react';
function App() {
  return (
    <React.Fragment>
      <Header/>
      <Home/>
      <Work/>
    </React.Fragment>
  );
}

export default App;
