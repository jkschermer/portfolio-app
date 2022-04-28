import React, {useState} from 'react';
import {Container} from './home.styled';

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <Container><div><h2>Hello! My name is Jason Schermer and I am a Software Engineering Student.
      <br/>Welcome to my portfolio website!</h2></div></Container>
  );
}

export default Home;
