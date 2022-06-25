import React from 'react';
import './App.css';
import Header from './components/layout/header';
import Home from './components/features/home/index';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
      <Home />
    </div>
  );
};
export default App;
