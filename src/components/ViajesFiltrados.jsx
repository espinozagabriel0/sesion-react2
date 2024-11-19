import viajes from "../viajes.json";

export function ViajesFiltrados(){
    // filtrar viajes
    const filtrados = viajes.filter(function(item){
        return item.precio > 1500
    })

    console.log("filtrados", filtrados)
    return (
        <div style={{border: '1px solid grey'}} className="componente">
            <h3>Lista de destinos con precios mayor a 1500</h3>
            <ul>
            {
                filtrados.map((item) =>
                    <li key={item.id}>{item.destino}</li>
                )
            }
            </ul>
        </div>
    )
}