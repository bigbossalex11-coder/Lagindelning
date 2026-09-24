import PlayerRow from './PlayerRow'

function PlayerList(props){
    return(
        <ul className="player-list">
    {props.players.map(player => <PlayerRow key={player.id} player={player} onChangeRank={props.onChangeRank} onUpload={props.onUpload} onDelete={props.onDelete} />)}
</ul>
    );
}
export default PlayerList