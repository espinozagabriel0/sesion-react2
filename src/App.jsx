import './App.css'
import { ConsolaForEach } from './components/ConsolaForEach' 
import { ViajesFiltrados } from './components/ViajesFiltrados'
import { ViajesMap } from './components/ViajesMap'

function App() {
  console.log('Componente app cargado')


  return (
    <>
      <h1>App principal</h1>
      <p>Componentes: </p>
      <ConsolaForEach/>
      <ViajesMap/>
      <ViajesFiltrados/>
    </>
  )
}

export default App
