import { useState } from 'react'

function App() {
const [players, setPlayers]= useState ([
  {id: 1, name: "Adam", rank: "grön"},
  {id: 2, name: "Eva", rank: "gul"},
  {id: 3, name: "Oskar", rank: "röd"}
]);
  console.log(players)

  return (
    <div>
      <h1>Lagindelning</h1>
      <ul>
        {players.map(player => <li key={player.id}>{player.name}, {player.rank}</li>)}
      </ul>
    </div>
  );
}

export default App;