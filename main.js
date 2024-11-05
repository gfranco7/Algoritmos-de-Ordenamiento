
 async function NumberInverted(){
    let mynumber =prompt('Ingresa un numero: ') 
    let numberInv = 0;
    while (mynumber > 0){
        numberInv = 10*numberInv+mynumber % 10
        mynumber = Math.floor(mynumber/10)    
    }

    alert('Numero invertido => '+numberInv) 
}
NumberInverted()

