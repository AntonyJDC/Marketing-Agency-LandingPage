import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Partners from './components/Partners/Partners';
import Servicios from './components/Servicios/Servicios';
import Nosotros from './components/Nosotros/Nosotros';

const App = () => {
  return (
    <main className='overflow-x-hidden bg-white text-dark'>
      <Navbar />
      <Hero />
      <Partners />
      <Nosotros/>
      <Servicios />
    </main>
  );
};

export default App