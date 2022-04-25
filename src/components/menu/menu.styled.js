import styled from 'styled-components';

export const StyledMenu = styled.nav`
  font-family: 'OpenSansLight';
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLightNavy};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(100%)'};
  width: 75%;
  
  @media (min-width: ${({ theme }) => theme.desktop}) {
    transform: none;
    background: ${({ theme }) => theme.primaryNavy};
    flex-direction: row;
    justify-content: right;
    padding: 0;
    width: 0;
  }

  a {
    font-size: 1.2rem;
    padding: 2rem 0;
    font-weight: 500;
    letter-spacing: 1.2px;
    color: ${({ theme }) => theme.primaryWhite};
    text-decoration: none;
    transition: color 0.3s linear;
    text-align: center;
    
    @media (min-width: ${({ theme }) => theme.desktop}) {
      padding: 0rem;
      margin: 2rem;
      font-size: 1rem;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryGreen};
    }
  }

  p {
    color: ${({ theme }) => theme.primaryGreen};

    @media (min-width: ${({ theme }) => theme.desktop}) {
      display: inline-block;
    }
  }
`;