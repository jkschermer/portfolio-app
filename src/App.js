import React, {useState} from 'react';
import './App.css';
import Burger from './components/burger/burger';
import Menu from './components/menu/menu';
import { ThemeProvider } from 'styled-components';
import {theme} from './theme';
import { GlobalStyles } from './global';
import selfie from './components/images/selfie_jason.jpg';
import Home from './components/home';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div className="container"> <img className="profilePic" src={selfie} alt="selfie"/>
      </div> 
      <Home/>
      <GlobalStyles/>
        <Burger open={open} setOpen={setOpen}/>
        <Menu open={open} setOpen={setOpen}/>
    </ThemeProvider>
  );
}

export default App;
