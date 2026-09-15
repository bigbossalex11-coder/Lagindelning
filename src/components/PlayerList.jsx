import PlayerRow from './PlayerRow'

function PlayerList(props){
    return(
        <ul className="player-list">
    {props.players.map(player => <PlayerRow key={player.id} player={player} onChangeRank={props.onChangeRank} />)}
</ul>
    );
}
export default PlayerList