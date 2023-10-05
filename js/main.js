let board = document.querySelector("#etch-a-sketch")
let colorPicker = document.querySelector("#color-picker")
let boardSize = document.querySelector("#board-picker")



// Checks if Mouse is Held on Board
let mouseState = false;
board.addEventListener("mousedown", ()=>{
    mouseState = true;
})
board.addEventListener("mouseup", ()=>{
    mouseState = false;
})

// Changes board size based on value
boardSize.addEventListener("change",(e)=>{
    while (board.firstChild){
        board.removeChild(board.firstChild);
    }
    if (e.target.value > 100){
        e.target.value = 100;
    }
    createBoard(parseInt(e.target.value))
})

// Board Reset
let reset = () =>{
    while (board.firstChild){
        board.removeChild(board.firstChild);
    }
    createBoard(parseInt(boardSize.value))
}

let createBoard = (size) => {
    for (let j = 0; j < size; j++) {
        let row = document.createElement('div');

        for (let i = 0; i < size; i++) {
            let div = document.createElement("div");
            div.style.width = `calc((${window.getComputedStyle(board).width} / ${size}))`
            div.style.height = div.style.width;
            div.classList.add("block")
            // If Mouse is held, call change color on block
            div.addEventListener("click", (e)=>{
                changeColor(e);
            })
            div.addEventListener("mouseover", (e)=>{
                if(mouseState){
                    changeColor(e);
                }
            });
            row.appendChild(div);
        }
        board.appendChild(row)
    }
}

let changeColor = (e) =>{
    e.target.style.backgroundColor=colorPicker.value
}

createBoard(16);

console.log(board.firstChild)
// console.log(board);