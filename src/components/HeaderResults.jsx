
const HeaderResults = ({filtrado, total}) => {
 
  return (
    <div id="cabecera-resultados">
        <h2>Stays in {filtrado} </h2>
        <p>{total}+ stays </p>
    </div>
  )
}

export default HeaderResults