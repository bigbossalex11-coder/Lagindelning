function TeamList(props){
    return(
        <div className="team-list">
            {props.teams.map((team, index) => (
                <div key={index} className="team">
                    <h2>Lag {index + 1}</h2>
                    <ul className="player-list">
                        {team.map(player => <li key={player.id} className={player.rank}>{player.name}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    );
}
export default TeamList