import { useEffect, useState } from 'react'
import './App.css'
import PlayerList from './components/PlayerList'

function App() {
const [players, setPlayers]= useState ([]);
useEffect(() => {
  fetch("http://localhost:5293/players")
  .then(r => r.json())
  .then(data => setPlayers(data));
}, []);

  function changeRank(id, newRank) {
    fetch(`http://localhost:5293/players/${id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: id, name: "eva", rank: newRank }) });
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