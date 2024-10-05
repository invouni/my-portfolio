import React from 'react';
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Nav from "./components/navBar.jsx";
import HomePage from './pages/home.jsx'
import AboutPage from './pages/aboutpage.jsx'
import ConnectPage from './pages/connectPage.jsx'
import ProjectsPage from './pages/projectpage.jsx'

function App() {
  return (
    <>
      <Routes>
        
        <Route path="/" element={
          <>
            
            <Nav />
            <HomePage />
          </>
        } />
        <Route path="/about" element={
          <>
            
            <Nav />
            <AboutPage />
          </>
        }/>
        <Route path="/projects" element={
          <>
            
            <Nav />
            <ProjectsPage />
          </>
        }/>
        <Route path="/connect" element={
          <>
            
            <Nav />
            <ConnectPage />
          </>
        }/>
      </Routes>
    </>
  )
}

export default App
