import { useState } from 'react'
import './App.css'
import PlayerList from './components/PlayerList'

function App() {
const [players, setPlayers]= useState ([
  {id: 1, name: "Adam", rank: "grön"},
  {id: 2, name: "Eva", rank: "gul"},
  {id: 3, name: "Oskar", rank: "röd"}
]);

  return (
    <div>
      <h1>Lagindelning</h1>
      <PlayerList players={players} />
    </div>
  );
}

export default App;