import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes';
import { Design, Develope } from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  min-height: 100vh;  // Changed from height
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;  // Changed from center
  gap: 2rem;
  padding: 6rem 0;  // Added padding
  overflow: hidden;
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  width: 30vw;
  min-height: 55vh;  // Changed from fixed height
  height: auto;  // Added for content-based height
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 4rem;  // Added top margin

  &:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>

                <LogoComponent theme='light' />
                <SocialIcons theme='light' />
                <PowerButton />
                <ParticleComponent theme='light' />

                {/* Android Developer */}
                <Main>
                    <Title>
                        <Develope width={40} height={40} /> Android Developer
                    </Title>
                    <Description>
                        <strong>Skills</strong>
                        <p>
                            Java, Kotlin, Android SDK, Retrofit, RxJava, Android Jetpack, Jetpack Compose, JUnit, Espresso, MotionLayout
                        </p>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <p>
                            Android Studio, Firebase Crashlytics, ProGuard, Firebase
                        </p>
                    </Description>

                </Main>

                {/* Frontend Developer */}
                <Main>
                    <Title>
                        <Develope width={40} height={40} /> Frontend Developer
                    </Title>
                    <Description>
                        <strong>Skills</strong>
                        <p>
                            HTML5, CSS3, JavaScript, ReactJS, Next.js, Media Queries, Tailwind CSS, REST APIs, GraphQL
                        </p>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <p>
                            VSCode, Git, GitHub, Figma, Adobe XD (for design collaboration), Jest, React Testing Library
                        </p>
                    </Description>

                </Main>

                {/* Backend Developer */}
                <Main>
                    <Title>
                        <Develope width={40} height={40} /> Backend Developer
                    </Title>
                    <Description>
                        <strong>Skills</strong>
                        <p>
                            Java, Kotlin, Python, Spring Boot, Django, FastAPI, REST APIs, GraphQL APIs, MySQL, PostgreSQL, SQLite, JWT, OAuth
                        </p>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <p>
                            Git, GitHub, GitLab, Postman, Docker, Jenkins, GitHub Actions (CI/CD), GCP
                        </p>
                    </Description>

                </Main>

                <BigTitle text="SKILLS" top="80%" right="30%" />

            </Box>

        </ThemeProvider>

    )
}

export default MySkillsPage
