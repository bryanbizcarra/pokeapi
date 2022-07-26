import React from 'react'
import '../estilos/MostrarPokemon.css'
const MostrarPokemon = ({imagen,nombre,tipo}) => {
    return (
        <div className="contenedor-pokemon">
            <img className='img-pokemon' src={imagen} alt="" />
            <span className="nombrePokemon">{nombre}</span>
            {/* <ul>{tipo.map(pokemon=>(
                    pokemon.types.map(poke=>(
                        <li>{poke.type.name}</li>
                    ))
                ))}</ul> */}
        </div>
    )
}

export default MostrarPokemon