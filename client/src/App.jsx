import { useEffect, useState } from 'react'
import './App.css'
import PlayerList from './components/PlayerList'
import AddPlayerForm from './components/AddPlayerForm';

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
function addPlayer(name) {
  fetch("http://localhost:5293/players", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: 0, name: name, rank: "grön" })
  })
    .then(r => r.json())
    .then(created => setPlayers([...players, created]));
}
    

  return (
    <div>
      <h1>Lagindelning</h1>
      <AddPlayerForm onAdd={addPlayer} />
      <PlayerList players={players} onChangeRank={changeRank} />
    </div>
  );
}
export default App;