import { useState } from 'react'
import './App.css'
import PlayerList from './components/PlayerList'

function App() {
const [players, setPlayers]= useState ([
  {id: 1, name: "Adam", rank: "grön"},
  {id: 2, name: "Eva", rank: "gul"},
  {id: 3, name: "Oskar", rank: "röd"},
]);

  function changeRank(id, newRank) {
    const nyLista = players.map(player => {
    if (player.id === id) {
    return { ...player, rank: newRank };
  }
    return player;
});
    setPlayers(nyLista);
  }

  return (
    <div>
      <h1>Lagindelning</h1>
      <PlayerList players={players} onChangeRank={changeRank} />
    </div>
  );
}

export default App;