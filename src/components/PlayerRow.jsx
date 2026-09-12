function PlayerRow(props) {
    return (
        <li>{props.player.name}, {props.player.rank}</li>
    )
}

export default PlayerRow