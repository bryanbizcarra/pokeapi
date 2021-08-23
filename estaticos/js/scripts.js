const botonBuscar = document.getElementById('botonBuscar')
const inputBuscar = document.getElementById('inputBuscar')
const tarjeta = document.querySelector('.tarjeta')
const imagen = document.getElementById('imagen')
const nombrePokemon = document.querySelector('.nombrePokemon')
const listaTipo = document.querySelector('.listaTipo')

const url = 'https://pokeapi.co/api/v2/pokemon/'
botonBuscar.addEventListener('click', buscarPokemon)
function buscarPokemon() {
    listaTipo.textContent = ''
    fetch(`${url}${inputBuscar.value.toLowerCase()}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.types)
            imagen.setAttribute('src', data.sprites.front_default)
            nombrePokemon.textContent = data.name
            for (let i = 0; i < data.types.length; i++) {
                const tipo = document.createElement('li')
                tipo.textContent = data.types[i].type.name
                listaTipo.appendChild(tipo)
            }
        })
        .catch((error) => {
            console.log(error)
            alert('Tu pokemon no pudo ser encontrado')
            inputBuscar.value = ''
        })
}

