import { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
     getData();
  }, []);

  // Puedes ver la variable data en consola.
  console.log(data);

  const [filtrado, setFiltrado] = useState(data);

  const handleSumit = (e) => {
    e.preventDefault();
    let busqueda = e.target[0].value.toLowerCase();

    let arr = data.filter((alojamiento) => {
      let ciudad = alojamiento.city.toLowerCase(); // recibo un string
      return ciudad.includes(busqueda);
    });

    setFiltrado(arr);
    console.log(arr);
  };
 console.log(filtrado[0]);
  return (
    <>
      <div id="contenedor-principal">    
        <Header handleSumit={handleSumit} filtrado={ ( filtrado[0] === undefined ? "a selected country" : filtrado[0].country)} total={filtrado.length} />
        <div id="contenedor-cards">
          { filtrado.map((hosting,i) => <Card key={i} hosting={hosting} />) } 
        </div>
        <footer>
            created by <a href="https://linktr.ee/FrancescoGaliano" > Francesco Galiano</a> - devChallenges.io
        </footer>
      </div>
    {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. */}
{/*       {data.map((el, i) => {
        return <h1 key={i}>{el.city}</h1>;
      })} */}
    </>
  );
}

export default App;
