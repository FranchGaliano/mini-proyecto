
const Nav = ({handleSumit}) => {
  return (
    <form action="" id="barraBuscar" onSubmit={handleSumit}>
        <input type="text" id="input-city" defaultValue="" className="box-buscar buscar-texto" placeholder="Add city" />
        <input type="text" id="input-guest" defaultValue="" className="box-buscar buscar-texto" placeholder="Add guest" />
        <button id="btn-buscar" className="box-buscar">
            <span className="material-symbols-outlined">
                search
            </span>
        </button>
    </form>
  )
}

export default Nav