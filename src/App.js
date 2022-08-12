import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar/Navbar';
import WhatGPT from './components/whatgpt/WhatGPT';
import Header from './components/header/Header';
import Features from './components/features/Features';
import Possibility from './components/possibility/Possibility';
import Footer from './components/footer/Footer';
import Blog from './components/blog/Blog';
import CTA from './components/cta/CTA';

function App() {
  return (
    <>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
        <WhatGPT />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
      </div>
      <Footer />
    </>
  );
}

export default App;
