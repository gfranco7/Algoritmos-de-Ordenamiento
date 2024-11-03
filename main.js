
let NumbersList = [3, 7, 1, 9, 4, 6, 2, 8, 5, 10, 15, 12, 18, 14, 11, 17, 20, 19, 16, 13]

async function SORTING(){
    let topOne = 1;
    NumbersList.sort((a,b)=>(a-b))
    console.log(NumbersList)
}

SORTING();

async function BINARYS(mynumber){
    let binaryS = false 
    let topIndex = NumbersList.length(-1)
    let lowIndex = NumbersList[0]
    let half;
    while(lowIndex < topIndex){
        half = Math.floor(NumbersList.length/2);
        if (NumbersList[half]==mynumber){
            return console.log('The number has been found in the '+half+ 'position')
        }
        if (mynumber > NumbersList[half]){
            lowIndex = NumbersList[half]+1
        }else{
            topIndex = NumbersList[half] -1
        }
    }return console.log('Not found')
     
}
BINARYS(10) 
