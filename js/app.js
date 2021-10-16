fetch("https://pokeapi.co/api/v2/pokemon/?limit=79")
  .then((response) => response.json())
  .then((data) => cargarListado(data))
  .catch((error) => console.log(error));

let cargarListado = (data) => {
  let poke = "";
  for (let i = 0; i < data["results"].length; i++) {
    poke = data["results"][i].name;
    crearBoton(poke);
  }

  let botones = document.getElementsByName("boton");
  botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
      cargarPokemon(boton.innerHTML)
    });
  });
}

let crearBoton = (poke) => {
  let lista = document.querySelector("#contenedor-listado");
  lista.innerHTML += `<button name="boton">${poke}</button>`;
};

function cargarPokemon(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  .then(response => response.json())
  .then(data => crearCarta(data))
  .catch(error => console.log(error))
}

function crearCarta(poke) {
  let contenedor = document.querySelector("#contenedor-carta");
  contenedor.innerHTML = `<h4>${poke.name}</h4>`+ 
  `<img src='${poke.sprites.front_default}' height=200px%;/>`+
  `<h5>ID: ${poke.id}</h5>`
}                                                                                                       {}
