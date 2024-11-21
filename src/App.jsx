import { useState } from 'react'
import './App.css'
// import { ConsolaForEach } from './components/ConsolaForEach' 
// import { ViajesFiltrados } from './components/ViajesFiltrados'
// import { ViajesMap } from './components/ViajesMap'
import db from './viajes.json'

function App() {
  const [viajes, setViajes] = useState(db)
  const [ordenAscendente, setOrdenAscendente] = useState(true)

  //funcion ordenar y desordenar los viajes por precio
  function ordenarViajes(){
    // setOrdenAscendente(!ordenAscendente)

    // crear nuevo array ordenado
    const newArray = [...viajes].sort((a, b) => {
      return ordenAscendente ? a.precio - b.precio : b.precio - a.precio;
      //dependiendo del valor de ordenAscendente se ordena por precio ascendente o descendentemente
    });

    //actualizar state
    setViajes(newArray)
    // cambiar boton orden ascendente al contrario al que estaba
    setOrdenAscendente(!ordenAscendente)
  }


  // funcion eliminar viaje 
  function eliminarViaje(id){
    // filtrar array excluyendo al elemento seleccionado
    const arrFiltrado = viajes.filter((viaje) => viaje.id !== id)
    setViajes(arrFiltrado);
  }

  return (
    <div>
      <h1>Lista de viajes</h1>
      <button
        onClick={ordenarViajes}
      >
        {ordenAscendente ? 'Ordenar por precio descendente' : 'Ordenar por precio ascendente'}
      </button>

      <table border="1">
        <thead>
          <tr>
            <th>Destino</th>
            <th>Duración</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {viajes.map((viaje) => (
            <tr key={viaje.id}>
              <td>{viaje.destino}</td>
              <td>{viaje.duracion}</td>
              <td>${viaje.precio}</td>
              <td>
                <button onClick={() => eliminarViaje(viaje.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <p>Componentes: </p>
      <ConsolaForEach/>
      <ViajesMap/>
      <ViajesFiltrados/> */}
    </div>
  )
}

export default App
