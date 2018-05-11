import React, { Component } from 'react';
import './App.css';
import NavBar from './components/nav/NavBar';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar />
       <Hero />
       <Footer />
      </div>
    );
  }
}

export default App;
