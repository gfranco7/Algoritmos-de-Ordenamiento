
let NumbersList = [3, 7, 1, 9, 4, 6, 2, 8, 5, 10, 15, 12, 18, 14, 11, 17, 20, 19, 16, 13]

async function SORTING(){
    let topOne = 1;
    NumbersList.sort((a,b)=>(a-b))
    console.log(NumbersList)
}

SORTING();

async function BINARYS(myNumber){
    let binaryS = false 
    half = Math.floor(NumbersList.length/2)
    let nextHalf;
    if (half == myNumber) {
        binaryS = true
        console.log("Number found in position number: "  + NumbersList[half])
    }else if(half < myNumber){

    }else if (half > myNumber){

    }
}

BINARYS(10)

