import viajes from '../viajes.json'

export function ViajesMap(){
    console.log(viajes)
    const listaViajes = viajes.map(function(element){
        return element.destino
    })

    console.log(listaViajes)

    return (
        <div style={{border: '1px solid grey'}} className="componente">
            <h3>Lista de Viajes</h3>
            <ul>
            {
                listaViajes.map((item) =>
                    <li key={item.id}>{item}</li>
                )
            }
            </ul>
        </div>
    )
}