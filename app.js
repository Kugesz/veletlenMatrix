var matrixHtml;
var tomb = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var randomTomb = []

window.onload = function() {
    if (tomb.length == 9){
        document.getElementById("suffel").addEventListener("click", function(){
            initialBoard();
            randomTomb = setRandomOrder(tomb);
            renderBoard(randomTomb, matrixHtml);
        })
        matrixHtml = document.getElementById("matrix");
    }else{
        alert("A tömb hossza nem megfelelő!")
    }
};

function initialBoard(){
    randomTomb = []
}

function setRandomOrder(eredetiTomb){
    let ujTomb = [];
    let t = eredetiTomb.slice();
    for(let i = t.length - 1; i >= 0; i--){
        let r = veletlenSzam(0,i);
        ujTomb.push(t[r]);
        t.splice(r,1);
        console.log(t);
    }
    return ujTomb;
}

function getItem(tomb, index){
    return tomb[index];
}

    function renderBoard(tomb, htmlHely){
        let s = `<div class="row justify-content-around">`
            for(let i = 0; i <3; i++){
                for(let j = 0; j < 3; j++){
                    let szam = getItem(tomb, j + (i*3));
                    s += `<div class="col-3"><p>${szam}</p></div>`;
                }
                s += `</div>
                    <div class="row justify-content-around">`;
            }
            s += `</div>`;
        console.log(s);
        matrixHtml.innerHTML = s;
    }

    function veletlenSzam(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }