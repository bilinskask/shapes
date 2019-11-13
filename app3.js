// let anchorElems = document.querySelectorAll("a")

// anchorElems.forEach(elem =>{
//     elem.addEventListener("click", (e)=>{
//         // if(e.target.style.backgroundColor === "red"){
//         //     e.target.style.backgroundColor="green";
//         // }        
//         // else{
//         //     e.target.style.backgroundColor="red"
//         // }
//         e.target.style.backgroundColor = e.target.style.backgroundColor === "green" ? "red" : "green";
//     })
// })


let operators = document.querySelectorAll("button");
let result = document.getElementById("finalResult")

operators.forEach(operator =>{
    operator.addEventListener("click", (e) =>{
        switch(e.target.id){
        case "triangle":
        result.innerHTML = drawTriangle()
        break;
        case "pyramid":
        result.innerHTML = drawPyramid()
        break;
        case "reversepyramid":
        result.innerHTML = drawReversePyramid()
        break;
        case "diamond":
        result.innerHTML = drawDiamond()
        break;
        }    
    })
})


function drawTriangle(){
    let n = 5;
    let symbol = "*";
    let emptySpace = "";

    for(i = 0; i < n; i++ ){       
        for(j = 0; j <= i; j++){
            emptySpace += symbol;
        }
        emptySpace += '<br />'
    }
    console.log(emptySpace);
    return emptySpace
}



function drawPyramid(){
    let n = 5;
    let symbol = "*";
    let emptySpace = '&nbsp;';
    let result = "";

    for(i = 0; i < n; i++ ){
        for(s = 0; s < n-i; s++){
            result += emptySpace;
        }
        
        for(j = 0; j < i*2+1; j++){
            result += symbol;
        }
        result += '<br />'
    }
    console.log(result);
    return result
}

function drawReversePyramid(){
    let n = 5;
    let symbol = "*";
    let emptySpace = '&nbsp;';
    let result = "";

    for(i = 0; i < n; i++ ){
        for(s = 0; s <= i; s++){
            result += emptySpace;
        }
        for(j = 0; j < (n-i)*2-1; j++){
            result += symbol;
        }
        result += '<br />'
    }
    console.log(result);
    return result
}

function drawDiamond(){
    let n = 7;
    let symbol = "*";
    let emptySpace = '&nbsp;';
    let result = "";

    for(i = 0; i < n; i++ ){
        if(i <= (n-1)/2){
            for(s = 0; s < n-i; s++){
                result += emptySpace;
            }
            for(j = 0; j < i*2+1; j++){
                result += symbol;
            }
        } else{
            for(s = 0; s <= i; s++){
                result += emptySpace;
            }
            for(j = 0; j < (n-i)*2-1; j++){
                result += symbol;
            }
        }
        result += '<br />'
    }
    console.log(result);
    return result
}

function clear(){

}

