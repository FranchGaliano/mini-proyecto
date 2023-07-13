import HeaderResults from "./HeaderResults"
import Nav from "./Nav"

const Header = ({handleSumit, filtrado}) => {
  return (
    <>
        <div id="contenedor-cabecera">
            <div id="logo">
                <img src="src/img/logo.png" alt="Logo Windbnb" />
            </div>
            <Nav handleSumit={handleSumit} filtrado={filtrado} />
        </div>
        <HeaderResults />
    </>
  )
}

export default Header