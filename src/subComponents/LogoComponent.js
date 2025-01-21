import styled from "styled-components";
import { mediaQueries } from "../components/Themes";
import lightLogo from "../assets/Images/my_logo_dark.png"; // Add your light theme logo path
import darkLogo from "../assets/Images/my_logo_light.png"; // Add your light theme logo path

const Logo = styled.div`
  display: inline-block;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
  
  img {
    height: auto;
    width: 3rem; // Default size
    transition: all 0.3s ease;
  }

  ${mediaQueries(40)`
    left: 1rem;
    top: 2rem;
    
    img {
      width: 2.5rem; // Smaller size for mobile
    }
  `};
`;

const LogoComponent = (props) => {
  return (
    <Logo theme={props.theme}>
      <img 
        src={props.theme === "dark" ? darkLogo : lightLogo} 
        alt="Logo" 
      />
    </Logo>
  );
};

export default LogoComponent;