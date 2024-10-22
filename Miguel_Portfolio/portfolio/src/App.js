import { ThemeProvider } from "styled-components"; 
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js';
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import styled from "styled-components";
import Contact from "./components/Contact";
import Chatbox from "./components/Chatbox";  // Import the Chatbox component

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
 background: 
  linear-gradient(38.73deg, rgba(0, 0, 128, 0.15) 0%, rgba(0, 0, 128, 0) 50%), 
  linear-gradient(141.27deg, rgba(0, 0, 128, 0) 50%, rgba(0, 0, 128, 0.15) 100%);
width: 100%;
clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
        <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
        
          <Wrapper>
            <Education />
            <Contact />
    <Projects />
            <Chatbox />  {/* Add the Chatbox here */}
          </Wrapper>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;

