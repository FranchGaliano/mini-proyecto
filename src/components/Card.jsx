const Card = ({ hosting }) => {
  return (
    <div id="card">
      <img src={hosting.photo} alt="imagen" />
      <div id="card-detalle">
        <div id="card-detalle-izquierda">
            {hosting.superHost ? <span id="card-host">Super host</span> : null}
            <span id="card-type-beds">
                {(hosting.beds===null)? hosting.type : (hosting.type + " . "+hosting.beds+" beds")  } 

            </span>
        </div>
        <div id="card-detalle-derecha">
          <span className="material-symbols-outlined star">star</span>
          <span id="card-rating">{hosting.rating}</span>
        </div>
      </div>
      <h3 id="card-title">{hosting.title}</h3>
    </div>
  );
};

export default Card;
