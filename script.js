// exercício - 1
const frutas = ["laranja", "limão", "uva"];


let fruta1= document.getElementById("fruta-1");
fruta1.innerHTML =frutas[0]

let fruta2= document.getElementById("fruta-2");
fruta2.innerHTML =frutas[1]

let fruta3= document.getElementById("fruta-3");
fruta3.innerHTML =frutas[2]


const inp = document.getElementById('name')
console.log(inp.value)


function cliquee () {
    console.log('olá')
}


const clique = () => {
   const fruta4 = document.getElementById('fruta-4')
   fruta4.innerHTML = inp.value
}

