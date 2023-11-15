export function Listado(params) {
   return (
    <div>
       <h2>{params.titulo}</h2>
       {params.data.map(data => {
        return (
            <div>
                <h3>{data.titulo}</h3>
                <button onClick={() => alert(params.texto_a_mostrar)}>Desafiar</button>
            </div>
        )
       })}
    </div>
   ) 
}