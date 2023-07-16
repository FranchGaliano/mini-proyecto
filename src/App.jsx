import { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  // La variable "filtrado" es la que almacena los datos de "stays.json" y "setFiltrado" guarda esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [filtrado, setFiltrado] = useState([]);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable "filtrado".
      setFiltrado(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook ejecuta la función getData cada vez que la página se renderice.
  useEffect(() => {
     getData();
  }, []);


  const handleSumit = (e) => {
    e.preventDefault();
    // Obtenemos el valor del input city
    let busqueda = e.target[0].value.toLowerCase();
    // Obtenemos el valor del input guest
    let guest = e.target[1].value;
    
    let arr = filtrado.filter((alojamiento) => {
      let ciudad = alojamiento.city.toLowerCase(); // recibo un string
      let huespedes = alojamiento.maxGuests; // recibo un número entero
           
      if (huespedes>=guest) {
        return ciudad.includes(busqueda);
      }
    });
    setFiltrado(arr);
  };

  return (
    <>
      <div id="contenedor-principal">    
        <Header handleSumit={handleSumit} filtrado={ ( filtrado[0] === undefined ? "a selected city" : filtrado[0].country)} total={filtrado.length} />
        <div id="contenedor-cards">
          { filtrado.map((hosting,i) => <Card key={i} hosting={hosting} />) } 
        </div>
        <footer>
            created by <a href="https://linktr.ee/FrancescoGaliano" > Francesco Galiano</a> - devChallenges.io
        </footer>
      </div>
    </>
  );
}

export default App;
