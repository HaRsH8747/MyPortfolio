import { motion } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";
import { lazy } from "react";
import { lightTheme, mediaQueries } from "./Themes";

import { Android, Backend, Develope } from "./AllSvgs";

//Components
const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const ParticleComponent = lazy(() =>
    import("../subComponents/ParticleComponent")
);
const BigTitle = lazy(() => import("../subComponents/BigTitle"));

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  min-height: 100vh; // Changed to min-height
  position: relative;
  display: flex;
  flex-wrap: wrap; //  Add this
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  gap: 2rem;
  padding: 2rem 0; // Added padding

  ${mediaQueries(50)`
    grid-template-columns: 1fr;
    padding: 6rem 0;
    gap: 1.5rem;
  `};
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 80%;
  max-width: 400px;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  margin: 0 auto;
  font-family: "Ubuntu Mono", monospace;

  width: 30%; // Same as other boxes
  min-width: 300px; // Add minimum width
  margin: 1rem; // Consistent spacing
  ${mediaQueries(60)`
    height: 55vh;
    &:nth-child(7) {
      height: 45vh;
    }
  `};

  ${mediaQueries(50)`
    width: 50% !important; // Force same width for all in mobile
    height: 50%;
    min-width: unset;
    
    &:nth-child(7) {
      width: 90%;
      height: auto;
      min-height: 40vh;
    }
  `};

  &:hover {
    background-color: ${(props) => props.theme.text};
    border-color: ${(props) => props.theme.body};
    color: #fff; // Force white text on hover
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  ${mediaQueries(50)`
            font-size: calc(0.8em + 1vw);

  `};

  ${mediaQueries(30)`
                      font-size:calc(0.7em + 1vw);

              

  `};

  ${mediaQueries(25)`
                      font-size:calc(0.5em + 1vw);

              

  `};

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${mediaQueries(60)`
          font-size:calc(0.8em + 1vw);
  `};

  ${mediaQueries(50)`
          font-size:calc(1em + 2vw);
          margin-bottom:1rem;
  `};

  ${mediaQueries(30)`
                      font-size:calc(1em + 1vw);
  `};
  ${mediaQueries(25)`
                      font-size:calc(0.8em + 1vw);
                      svg{
                        width:30px;
                        height:30px;
                      }
  `};

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

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
                        <Android width={40} height={40} /> Android Developer
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
                        <Backend width={40} height={40} /> Backend Developer
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

export default MySkillsPage;
