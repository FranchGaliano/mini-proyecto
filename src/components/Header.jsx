import HeaderResults from "./HeaderResults"
import Nav from "./Nav"
import Logo from "../img/logo.png"

const Header = ({handleSumit, filtrado, total}) => {
  return (
    <>
        <div id="contenedor-cabecera">
            <div id="logo">
                <img src={Logo} alt="Logo Windbnb" />
            </div>
            <Nav handleSumit={handleSumit} filtrado={filtrado} />            
        </div>
        <HeaderResults filtrado={filtrado} total={total} />
    </>
  )
}

export default Header