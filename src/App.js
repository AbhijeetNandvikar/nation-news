import React from 'react';
import './App.css';
import Main from './Components/Main'
import Navigation from './Components/Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './Components/About'
import Contact from './Components/Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Route path={"/"} exact strict render={() => { return <Main /> }} />
        <Route path={"/about"} exact strict render={() => { return <About /> }} />
        <Route path={"/contact"} exact strict render={() => { return <Contact /> }} />


      </Router>

    </div>
  );
}

export default App;
