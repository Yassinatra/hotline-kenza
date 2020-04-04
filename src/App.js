import React from 'react';
import logo from './followMyLead.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Bienvenue sur la hotline pour Kenza. Just follow my lead.
          Quel est votre problème ce soir?
        </h2>
      
        <select id="issue">
          <option value="peur">J'ai peur toute seule</option>
          <option value="myea">J'ai envie de toi</option>
          <option value="fromage">J'ai envie de fromage</option>
          <option value="dragibus">J'ai envie de dragibus</option>
          <option value="viande">Je n'aime pas la viande</option>
        </select>

        <h3>La solution a votre problème est:</h3>
    
      </header>
    </div>
  );
}

export default App;
