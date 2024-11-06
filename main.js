
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





const simulatorMC = () =>{
    let dardosIn=0;
    let dardos=0;
    
        for(i=0; i<10000000;i++){
            let x = Math.random()*2;
            let y = Math.random()*2;
    
            if(1-Math.sqrt(((x-1)**2)+((y-1)**2))>=0){
                dardosIn+=1;
            }
    
            dardos+=1;
    
        }
        console.log((4*dardosIn)/dardos);
    }
    
    simulatorMC();