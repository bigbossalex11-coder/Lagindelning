import { useEffect, useState } from 'react'
import './App.css'
import PlayerList from './components/PlayerList'
import AddPlayerForm from './components/AddPlayerForm';

const API_URL = "http://localhost:5293";

function App() {
const [players, setPlayers]= useState ([]);
const [error, setError] = useState("")
useEffect(() => {
 fetch(`${API_URL}/players`)
  
 .then(r => {
    if (!r.ok) throw new Error();
    return r.json();
  })
  .then(data => setPlayers(data))
  .catch(err => setError("kunde inte nå servern"));
}, []);

  function changeRank(id, newRank) {
    const current = players.find(p => p.id === id)
    fetch(`${API_URL}/players/${id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: id, name: current.name, rank: newRank }) })
    .catch(err => setError("kunde inte ändra spelaren"));
    const nyLista = players.map(player => {
    if (player.id === id) {
    return { ...player, rank: newRank };
}
    return player;
});
    setPlayers(nyLista);
  }

  function addPlayer(name) {
  fetch(`${API_URL}/players`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: 0, name: name, rank: "grön" })
  })
    .then(r => {
    if (!r.ok) throw new Error();
    return r.json();
})
    .then(created => setPlayers([...players, created]))
    .catch(err => setError("kunde inte lägga till spelaren"));
}

function uploadFile(id,file){
  const fd = new FormData();
  fd.append("file", file);
    fetch(`${API_URL}/players/${id}/file`,{
     method: "POST", 
     body: fd 
    })
    .then(r => {
    if (!r.ok) throw new Error();
    return r.json();
    })  
    .then(updated => setPlayers(players.map(player => player.id === id ? updated : player)))
    .catch (err => setError ("kunde inte ladda upp filen"));
    }
    
    return (
    <div>
      <h1>Lagindelning</h1>
      {error && <p>{error}</p>}
      <AddPlayerForm onAdd={addPlayer} />
      <PlayerList players={players} onChangeRank={changeRank} onUpload={uploadFile} />
    </div>
  );
}
export default App;

