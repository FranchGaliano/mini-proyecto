import HeaderResults from "./HeaderResults"
import Nav from "./Nav"

const Header = ({handleSumit, filtrado, total}) => {
  return (
    <>
        <div id="contenedor-cabecera">
            <div id="logo">
                <img src="https://franchgaliano.github.io/mini-proyecto/src/img/logo.png" alt="Logo Windbnb" />
            </div>
            <Nav handleSumit={handleSumit} filtrado={filtrado} />            
        </div>
        <HeaderResults filtrado={filtrado} total={total} />
    </>
  )
}

export default Header