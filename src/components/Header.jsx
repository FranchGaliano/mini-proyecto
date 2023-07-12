
const Header = () => {
  return (
    <div id="contenedor-cabecera">
        <div id="logo">
            <img src="src/img/logo.png" alt="Logo Windbnb" />
        </div>
        <form action="" id="barraBuscar">
            <input type="text" id="input-city" className="box-buscar buscar-texto" value="Add city" />
            <input type="text" id="input-guest" className="box-buscar buscar-texto" value="Add guest" />
            <button id="btn-buscar" className="box-buscar">
                <span className="material-symbols-outlined">
                    search
                </span>
            </button>

        </form>
    </div>
  )
}

export default Header