import { useState } from "react";

function AddPlayerForm(props){
    const [name, setName] = useState("");
    
    function handleSubmit(event) {
        event.preventDefault();
            props.onAdd(name);
            setName("");
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="Namn" value={name} onChange={e => setName(e.target.value)} />
            <button>Lägg till</button>
        </form>
    )
}

export default AddPlayerForm