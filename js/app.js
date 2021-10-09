fetch("https://pokeapi.co/api/v2/pokemon/?limit=1800")
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

  

  let changeBg = () =>{
    const simbolos = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    let color = "",
      random;

    for (i = 0; i < 6; i++) {
      random = Math.round(Math.random() * 14);
      color += `${simbolos[random]}`;
    }

    document.querySelectorAll("button").forEach(function(boton){
      boton.style.backgroundColor = `#${color}`
    })
  }

  setInterval(changeBg, 4500)
};

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
  contenedor.innerHTML = `<h1>${poke.name}</h1>`+ 
  `<img src='${poke.sprites.front_default}' height=200px%;/>` 
}                                                                                                       {}
