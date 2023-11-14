export function Listado(params) {
   return (
    <div>
       <h1>{params.titulo}</h1>
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