import React from 'react';
import './App.css';
import { Brand, CTA, Navbar } from './components';
import { Blog, Features, Footer, GPT3, Header, Possibility } from './containers';
function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar/>
        <Header/>
      </div>
        <Brand/>
        <GPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  );
}

export default App;
