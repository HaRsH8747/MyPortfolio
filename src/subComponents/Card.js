import { motion } from 'framer-motion';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from '../components/AllSvgs';



const Box = styled(motion.li)`
width: 16rem;
height: 40vh;
background-color: ${props => props.theme.text};
color:${props => props.theme.body};
padding: 1.5rem 2rem;
margin-right: 8rem;
border-radius: 0 50px 0 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid ${props => props.theme.body};
transition: all 0.2s ease;

&:hover{
background-color: ${props => props.theme.body};
color:${props => props.theme.text};
border: 1px solid ${props => props.theme.text};

}
`
const Title = styled.h2`
font-size: calc(1em + 0.5vw);
`

const Description = styled.h2`
font-size: calc(0.8em + 0.3vw);
font-family: 'Karla',sans-serif;
font-weight: 500;
`
const Tags = styled.div`
border-top: 2px solid ${props => props.theme.body};
padding-top: 0.5rem;
display:flex;
flex-wrap:wrap;
${Box}:hover &{
border-top: 2px solid ${props => props.theme.text};
}
`
const Tag = styled.span`
margin-right:1rem;
font-size:calc(0.8em + 0.3vw);
`

const Footer = styled.footer`
display: flex;
justify-content: space-between;
`

const Link = styled.a`
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
text-decoration: none;
padding:0.5rem calc(2rem + 2vw);
border-radius: 0 0 0 50px;
font-size:calc(1em + 0.5vw);

${Box}:hover &{
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
}
`

const Git = styled.a`
  display: flex;
  align-items: center;
  position: relative;
  text-decoration: none;
  color: inherit;
  padding: 0.5rem 1rem;
  background-color: rgba(252, 246, 244, 1);
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const HoverText = styled.span`
  margin-left: 0.8rem;
  font-size: 0.9rem;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
  position: absolute;
  left: 100%;
  white-space: nowrap;

  ${Git}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Framer motion configuration
const Item = {
    hidden: {
        scale: 0
    },
    show: {
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const Card = (props) => {
    const {id, name, description, tags, github} = props.data;
  
    return (
      <Box key={id} variants={Item}>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Tags>
          {tags.map((t,id) => <Tag key={id}>#{t}</Tag>)}
        </Tags>
        <Footer>
          <Git href={github} target="_blank" rel="noopener noreferrer">
            <Github width={30} height={30} />
            <HoverText>View Code</HoverText>
          </Git>
        </Footer>
      </Box>
    )
  }

export default Card
