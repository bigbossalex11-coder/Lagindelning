function PlayerRow(props) {
  return (
    <li className={props.player.rank}>
      <div className="card-head">
        <span>{props.player.name}</span>
        <button
          className="remove"
          aria-label="Ta bort"
          onClick={() => props.onDelete(props.player.id)}
        >
          ✕
        </button>
      </div>
      <div className="buttons">
        <button
          className="dot grön"
          aria-label="grön"
          onClick={() => props.onChangeRank(props.player.id, "grön")}
        ></button>
        <button
          className="dot gul"
          aria-label="gul"
          onClick={() => props.onChangeRank(props.player.id, "gul")}
        ></button>
        <button
          className="dot röd"
          aria-label="röd"
          onClick={() => props.onChangeRank(props.player.id, "röd")}
        ></button>
      </div>
      <label className="file">
        <input
          type="file"
          onChange={(e) => props.onUpload(props.player.id, e.target.files[0])}
        />
        <span title={props.player.fileName}>
          {props.player.fileName || "Välj fil"}
        </span>
      </label>
    </li>
  );
}

export default PlayerRow;
