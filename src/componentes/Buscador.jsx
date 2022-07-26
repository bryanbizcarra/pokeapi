import React, { useState } from "react"
import '../estilos/Buscador.css'
import MostrarPokemon from "./MostrarPokemon"

export default function Buscador() {
    const [valorInput, setValorInput] = useState('')
    const [nombrePokemon, setNombrePokemon] = useState('')
    const [imagen, setImagen] = useState('')
    const [tipo, setTipo] = useState([])
    function DatosnombrePokemon(e) {
        e.preventDefault()
        e.target.reset()
        fetch(`https://pokeapi.co/api/v2/pokemon/${valorInput}`)
            .then(response => response.json())
            .then(data => {
                setNombrePokemon(data.name)
                setImagen(data.sprites.front_default)
                setTipo(data)

            }).catch((error)=>{
                setImagen('')
                setNombrePokemon('No se encontró pokemon')
            })
    }
    return (
        <>  
            <h1 className="titulo">Busca tu Pokemon</h1>
            <form className="formulario" onSubmit={DatosnombrePokemon}>
                <input onChange={(e) => setValorInput(e.target.value)} className="input-buscador" type="text" placeholder="Busca tu nombrePokemon por ID o Nombre" />
                <input className="input-submit" type="submit" value={"Buscar"} />
            </form>
            <MostrarPokemon imagen={imagen} nombre={nombrePokemon} tipo={tipo}></MostrarPokemon>
        </>
    )
}