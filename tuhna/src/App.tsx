import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import ListProducts from './components/List Products/ListProducts';

function App() {
  return (
    <div className="App">
      <Header/>
      <ListProducts/>
    </div>
  );
}

export default App;
