import React from 'react';
import './App.css';
import { Button } from '@mui/material';
import News from './components/News/News';

function App() {
  return (
    <div className="App">
      <Button color='primary'>Click Me</Button>
      <Button variant='contained' color='secondary'>Secondary</Button>
      <News></News>
    </div>
  );
}

export default App;
