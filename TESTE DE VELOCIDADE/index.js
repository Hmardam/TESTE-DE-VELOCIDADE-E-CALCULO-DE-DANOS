const name1 = prompt("Insira aqui o nome do primeiro veículo: ")
const vel1 = prompt("Insira aqui a velocidade do primeiro veículo: ")

const name2 = prompt("Insira aqui o nome do segundo veículo: ")
const vel2 = prompt("Insira aqui a velocidade do segundo veículo: ") 

if (vel1>vel2){
  alert(name1 + " uscé mais rápido que "+ name2)
} else if (vel2> vel1){
  alert(name2 + " é mais rápido que "+ name1)
} else{
  alert(name1 + "e " + name2 + "possuem velocidades iguais.")
}