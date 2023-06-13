import React, { useState } from 'react';
import { Hero } from './features/hero/Hero';
import './App.css';
import Header from './features/header/Header';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="text-center max-w-[100%] overflow-hidden">
        <Header isDarkMode={darkMode} toggleDarkMode={()=>setDarkMode(prev=> !prev)} openModal={()=>setShowModal(true)} />
        <Hero isDarkMode={darkMode} showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default App;
