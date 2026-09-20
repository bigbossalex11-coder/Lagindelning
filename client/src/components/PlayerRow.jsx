function PlayerRow(props) {
    return (
        <li className = {props.player.rank}>
            <div>
        {props.player.name}
        </div>
        <div className="buttons">
         <button onClick={() => props.onChangeRank(props.player.id, "grön")}>grön</button>
         <button onClick={() => props.onChangeRank(props.player.id, "gul")}>gul</button>
         <button onClick={() => props.onChangeRank(props.player.id, "röd")}>röd</button>
        </div>
        {props.player.fileName && <p>Fil: {props.player.fileName}</p>}
        <input type="file" onChange={e => props.onUpload(props.player.id, e.target.files[0])} />
        </li>

    )
}

export default PlayerRow