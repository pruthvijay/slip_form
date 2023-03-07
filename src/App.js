import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import Menu from './Menu';
import Form from './GoogleForm';
import './App.css';
import logo from './finalArtboard 7.png';

function App() {
  const [activeFormUrl, setActiveFormUrl] = useState("https://docs.google.com/forms/d/e/1FAIpQLSePuZc-rosV6Jt5p7I35i2Pqm-jhhZrp31ADLBsrDYcgs0nNA/viewform?embedded=true");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Pruthvi Group</h1>
      </header>
      <Menu setActiveFormUrl={setActiveFormUrl} />
      <Form formUrl={activeFormUrl} />
    </div>
  );
}

export default App;
