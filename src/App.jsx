import { useState } from 'react'
import './App.css'
import PlayerRow from './components/PlayerRow'

function App() {
const [players, setPlayers]= useState ([
  {id: 1, name: "Adam", rank: "grön"},
  {id: 2, name: "Eva", rank: "gul"},
  {id: 3, name: "Oskar", rank: "röd"}
]);

  return (
    <div>
      <h1>Lagindelning</h1>
      <ul className="player-list">
        {players.map(player =><PlayerRow key={player.id} player={player} />)}
      </ul>
    </div>
  );
}

export default App;