import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Partners from './components/Partners/Partners';
import Servicios from './components/Servicios/Servicios';

const App = () => {
  return (
    <main className='overflow-x-hidden bg-white text-dark'>
      <Navbar />
      <Hero />
      <Partners />
      <Servicios />
    </main>
  );
};

export default App