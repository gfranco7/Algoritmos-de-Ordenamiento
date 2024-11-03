
let NumbersList = [3, 7, 1, 9, 4, 6, 2, 8, 5, 10, 15, 12, 18, 14, 11, 17, 20, 19, 16, 13]

async function SORTING(){
    let topOne = 1;
    NumbersList.sort((a,b)=>(a-b))
    console.log(NumbersList)
}

SORTING();

async function BINARYS(){
    let binaryS = false 
    let topIndex = NumbersList[-1]
    let lowIndex = NumbersList[0]
    console.log(topIndex, lowIndex)
}
BINARYS() 

