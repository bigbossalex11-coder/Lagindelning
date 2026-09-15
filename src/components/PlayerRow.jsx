function PlayerRow(props) {
    return (
        <li>
        {props.player.name}, {props.player.rank}
         <button onClick={() => props.onChangeRank(props.player.id, "grön")}>Grön</button>
         <button onClick={() => props.onChangeRank(props.player.id, "Gul")}>Gul</button>
         <button onClick={() => props.onChangeRank(props.player.id, "Röd")}>Röd</button>
        </li>

    )
}

export default PlayerRow