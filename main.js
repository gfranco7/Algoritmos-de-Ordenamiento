
 async function NumberInverted(){
    let mynumber =prompt('Ingresa un numero: ') 
    let numberInv = 0;
    while (mynumber > 0){
        residuo = mynumber%10
        numberInv = 10*numberInv+residuo
        mynumber = Math.floor(mynumber/10)    
    }

    alert('Numero invertido => '+numberInv) 
}
//NumberInverted()




//Escribir una programa que calcule los siguientes 3 número de la sucesión 1, 1, 2, -1, 1, -2, -1, ?, ?, ?


async function dardos(){
    let dardos = [];
    for (let index = 0; index < 100; index++) {
        dardos.push((Math.random()*2).toFixed(2))
    }
    console.log(dardos)

}

console.log(dardos(10))


async function simulacionMC(){
    let outpoints;
    let inpoints;

    console.log(Math.sqrt(9))
}

simulacionMC()