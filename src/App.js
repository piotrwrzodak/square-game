import React from 'react';
import './App.css';
import Grid from './features/grid/Grid';
import Score from './features/score/Score';
import Gameover from './features/gameover/Gameover';

function App() {
  return (
    <div className="App">
      <Score />
      <Grid />
      <Gameover />
    </div>
  );
}

export default App;
