import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Doggy from './components/Doggy';
import { Box } from '@material-ui/core';

function App() {
  const [value, setValue] = useState('')
  return (
    <div className="App">
      <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center">
        <Doggy textBox={{
          value,
          onChange: e => {
            setValue(e.currentTarget.value)
          }
        }} button={{
          onClick: e => {
            if (value)
              alert(`${value} says vov!`)
          }
        }} />
      </Box>
    </div>
  );
}

export default App;
