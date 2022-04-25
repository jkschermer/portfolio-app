import React, {useState} from 'react';
import './App.css';
import Burger from './components/burger/burger';
import Menu from './components/menu/menu';
import { ThemeProvider } from 'styled-components';
import {theme} from './theme';
import { GlobalStyles } from './global';
import selfie from './selfie_jason.jpg';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div className="container"> <img className="profilePic" src={selfie} alt="selfie"/>
      </div> 
      <>
      <GlobalStyles/>
        <div>
        <Burger open={open} setOpen={setOpen}/>
        <Menu open={open} setOpen={setOpen}/>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
