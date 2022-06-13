import './App.css';
import { Header } from './components';
import { HomePage, CoinPage } from './Pages';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/coins" element={<CoinPage />} />
      </Routes>
    </>
  );
};

export default App;
