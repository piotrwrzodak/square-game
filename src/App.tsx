import React from 'react';
import Gameover from './components/Gameover';
import Grid from './components/Grid';
import Score from './components/Score';
import './index.css';

function App() {
  return (
    <div className="app">
      <Score />
      <Grid />
      <Gameover />
    </div>
  );
}

export default App;
