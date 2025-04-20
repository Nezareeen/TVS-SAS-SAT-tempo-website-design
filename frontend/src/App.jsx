import React from 'react';
import './App.css';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader/>
      <Hero/>
      <InfoSection/>
      <Footer/>
    </div>
  );
}

export default App;
