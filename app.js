var matrixHtml;
var tomb = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var randomTomb = []

window.onload = function() {
    if (tomb.length == 9){
        document.getElementById("suffel").addEventListener("click", function(){
            
        })
        matrixHtml = document.getElementById("matrix");
    }else{
        alert("A tömb hossza nem megfelelő!")
    }
};

function initialBoard(){
    randomTomb = []
}

function setRandomOrder(eredetiTomb, ujTomb){
    t = eredetiTomb
    for(let i = t.length; i >= 0; i--){
        ujTomb.push(t[i]);
        t.slice(i,1);
    }
    return ujTomb;
}

function getItem(tomb, index){
    return tomb[index];
}

function renderBoard(tomb, htmlHely){
    s = `<div class="row justify-content-around">
            <div class="col-3"></div>
            <div class="col-3"></div>
            <div class="col-3"></div>
        </div>
        <div class="row justify-content-around">
            <div class="col-3"></div>
            <div class="col-3"></div>
            <div class="col-3"></div>
        </div>
        <div class="row justify-content-around">
            <div class="col-3"></div>
            <div class="col-3"></div>
            <div class="col-3"></div>
        </div>`
}