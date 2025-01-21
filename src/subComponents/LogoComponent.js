import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'
import logoImage from '../assets/Images/my_logo_filled.png'; // Import your PNG file

const Logo = styled.div`
  display: inline-block;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
  
  img {
    width: 50px; // Adjust size according to your needs
    height: auto;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`

const LogoComponent = (props) => {
    return (
        <Logo>
          <img src={logoImage} alt="Logo" />
        </Logo>
    )
}

export default LogoComponent