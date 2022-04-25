import React from 'react';
import {bool} from 'prop-types';
import { StyledMenu } from '../menu/menu.styled';

const Menu = ({open}) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        {/* <span role="img" aria-label="about me">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span> */}
        {/* <span role="img" aria-label="about me">👨‍💻</span> */}
        <p>01.&nbsp;</p>
        About
      </a>
      <a href="/">
        {/* <span role="img" aria-label="experience">&#x1F525;</span> */}
        <p>02.&nbsp;</p>
        Experience
        </a>
      <a href="/">
        {/* <span role="img" aria-label="work">&#x1F525;</span> */}
        <p>03.&nbsp;</p>
        Work
        </a>
      <a href="/">
        {/* <span role="img" aria-label="contact">&#x1f4e9;</span> */}
        <p>04.&nbsp;</p>
        Contact
        </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu;