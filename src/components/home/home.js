import React, {useState} from 'react';
import StyledHome from './home.styled';

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container"><h2>Hello, my name is Jason Schermer and I am a Software Engineering Student</h2></div>
  );
}

export default Home;
