import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitle'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: block; /* Change to block to allow natural content flow */
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;

  overflow: auto; /* Make content scrollable */
  scrollbar-width: thin; /* Optional: Thin scrollbar for better appearance (Firefox) */
  scrollbar-color: ${(props) => props.theme.text} transparent; /* Optional: Styling scrollbar (Firefox) */

  /* Optional: Custom scrollbar for WebKit browsers (Chrome, Edge, Safari) */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.text};
    border-radius: 3px;
  }
`





const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>

                <LogoComponent theme='dark' />
                <SocialIcons theme='dark' />
                <PowerButton />
                <ParticleComponent theme='dark' />

                <Spaceman>
                    <img src={astronaut} alt="spaceman" />
                </Spaceman>
                <Main>
                    Hi, I'm Harsh Moradiya, a passionate Software Developer 📱 with a focus on Android development. My journey began as a self-taught Android Developer, and my first professional experience was at Twinnet Technologies. I later furthered my skills during my co-op at Ingenico. I recently completed my Master of Applied Computing at the University of Windsor, building on a strong technical foundation from my Bachelor of Engineering in Computer Engineering. 🎓 With hands-on industry experience and a dedication to innovation, I’m excited to contribute to impactful software solutions.
                    <br /> <br />
                    I specialize in Android development, proficient in Java, Kotlin, JavaScript, and Python. 💻 My toolkit is centered around the Android SDK for native app development, with expertise in building robust, high-performance Android applications. Additionally, I bring experience with frameworks like ReactJS and Django, and proficiency in diverse database technologies. At Ingenico, I enhanced my skills by working on payment processing solutions, documentation analysis, and codebase review, deepening my understanding of secure ECR integrations.
                    <br /> <br />
                    In past roles, I contributed to app performance and security improvements, notably reducing unauthorized API access by 30% through vulnerability resolution. I’ve also built personal and academic projects—from a farmer collaboration platform to a car rental analysis tool—demonstrating my ability to turn complex challenges into streamlined, user-friendly solutions. 🌱🚗
                    <br /> <br />
                    Driven by a curiosity for new technologies and a commitment to productive problem-solving, I enjoy connecting with others in the tech field, sharing insights, and continually expanding my knowledge. 🚀🌐
                </Main>

                <BigTitle text="ABOUT" top="10%" left="5%" />


            </Box>

        </ThemeProvider>

    )
}

export default AboutPage 