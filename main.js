//main.js
//This is the setup to draw on the canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');
canvas.width = 480;
canvas.height = 320;
let width = canvas.width;
let height = canvas.height;
const streakCounter = document.getElementById("streakCounter");

//Setup for testing options
let testingOptions = document.querySelector('form');
testingOptions.addEventListener('click', chooseSet, false);
function chooseSet() {
    let ele = document.getElementsByName('testingOptions');
    /*for(let i = 0; i < ele.length; i++) {
        console.log(ele[i].value + ":" + ele[i].checked);
    }*/
    for(let i = 0; i < ele.length; i++) {
        if(ele[i].checked) {
            chosenOption = ele[i].value;
            break;
        }
    }
    resetToChosenList(chosenOption);
    streakCount = 0;
    updateStreak();

    currentPiece = pickRandFromList(tempArr)
    drawPiece(currentPiece);
    console.log(tempArr.length);
}

//This is the setup for the input box information
const letterInput = document.getElementById('letterInput');

//This is the setup for the check button (or enter)
const checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', checkingFunction, false);
document.addEventListener('keydown', keyDownHandler, false);

function checkingFunction() {
    console.log("Checking the letter input");
    if(letterInput.value === currentPiece.letter || letterInput.value === currentPiece.letterAlt) {
        console.log('Correct');
        letterInput.value = null;
        streakCount++;
        updateStreak();
        drawGreenTint();
        
        if(tempArr.length < 1) {
            console.log('List completed. Resetting...');
            resetToChosenList(chosenOption);
        }
        
        currentPiece = pickRandFromList(tempArr)
        console.log(tempArr.length);
        setTimeout(drawPiece,500,currentPiece);
    }
    else {
        console.log("Wrong");
        letterInput.value = null;
        streakCount = 0;
        updateStreak();

        drawRedTint();
        setTimeout(drawPiece,500,currentPiece);
    }
}

function keyDownHandler(e) {
    if(e.key === 'Enter') {
        console.log('Enter');
        checkingFunction();
    }
}

//Color Palette
const white = 'rgb(255,255,255)';
const blue = 'rgb(0,0,255)';
const orange = 'rgb(250,160,60)';
const green = 'rgb(100,230,40)';
const red = 'rgb(255,0,0)';
const yellow = 'rgb(250,250,40)';
const emptyColor = '#eeeeee';

function pieceFactory (letter, letterAlt, topColor, frontColor, rightColor) {
    return {letter: letter, 
    letterAlt: letterAlt, 
    topColor: topColor, 
    frontColor: frontColor,
    rightColor: rightColor
    }; 
} 

//Data for all the corners 
const cornersArr = []; 
cornersArr.push(pieceFactory('A', 'a', white, blue, orange)); 
cornersArr.push(pieceFactory('B', 'b', white, red, blue)); 
cornersArr.push(pieceFactory('C', 'c', white, green, red)); 
cornersArr.push(pieceFactory('D', 'd', white, orange, green)); 

cornersArr.push(pieceFactory('E', 'e', orange, white, blue)); 
cornersArr.push(pieceFactory('F', 'f', orange, green, white)); 
cornersArr.push(pieceFactory('G', 'g', orange, yellow, green)); 
cornersArr.push(pieceFactory('H', 'h', orange, blue, yellow)); 

cornersArr.push(pieceFactory('I', 'i', green, white, orange)); 
cornersArr.push(pieceFactory('J', 'j', green, red, white)); 
cornersArr.push(pieceFactory('K', 'k', green, yellow, red)); 
cornersArr.push(pieceFactory('L', 'l', green, orange, yellow)); 

cornersArr.push(pieceFactory('M', 'm', red, white, green)); 
cornersArr.push(pieceFactory('N', 'n', red, blue, white)); 
cornersArr.push(pieceFactory('O', 'o', red, yellow, blue)); 
cornersArr.push(pieceFactory('P', 'p', red, green, yellow)); 

cornersArr.push(pieceFactory('Q', 'q', blue, white, red)); 
cornersArr.push(pieceFactory('R', 'r', blue, orange, white)); 
cornersArr.push(pieceFactory('S', 's', blue, yellow, orange)); 
cornersArr.push(pieceFactory('T', 't', blue, red, yellow)); 

cornersArr.push(pieceFactory('U', 'u', yellow, green, orange)); 
cornersArr.push(pieceFactory('V', 'v', yellow, red, green)); 
cornersArr.push(pieceFactory('W', 'w', yellow, blue, red)); 
cornersArr.push(pieceFactory('SH', 'sh', yellow, orange, blue)); 

//Data for all the edges
const edgesArr = []; 
edgesArr.push(pieceFactory('A', 'a', white, blue, emptyColor)); 
edgesArr.push(pieceFactory('B', 'b', white, red, emptyColor)); 
edgesArr.push(pieceFactory('C', 'c', white, green, emptyColor)); 
edgesArr.push(pieceFactory('D', 'd', white, orange, emptyColor)); 

edgesArr.push(pieceFactory('E', 'e', orange, white, emptyColor)); 
edgesArr.push(pieceFactory('F', 'f', orange, green, emptyColor)); 
edgesArr.push(pieceFactory('G', 'g', orange, yellow, emptyColor)); 
edgesArr.push(pieceFactory('H', 'h', orange, blue, emptyColor)); 

edgesArr.push(pieceFactory('I', 'i', green, white, emptyColor)); 
edgesArr.push(pieceFactory('J', 'j', green, red, emptyColor)); 
edgesArr.push(pieceFactory('K', 'k', green, yellow, emptyColor)); 
edgesArr.push(pieceFactory('L', 'l', green, orange, emptyColor)); 

edgesArr.push(pieceFactory('M', 'm', red, white, emptyColor)); 
edgesArr.push(pieceFactory('N', 'n', red, blue, emptyColor)); 
edgesArr.push(pieceFactory('O', 'o', red, yellow, emptyColor)); 
edgesArr.push(pieceFactory('P', 'p', red, green, emptyColor)); 

edgesArr.push(pieceFactory('Q', 'q', blue, white, emptyColor)); 
edgesArr.push(pieceFactory('R', 'r', blue, orange, emptyColor)); 
edgesArr.push(pieceFactory('S', 's', blue, yellow, emptyColor)); 
edgesArr.push(pieceFactory('T', 't', blue, red, emptyColor)); 

edgesArr.push(pieceFactory('U', 'u', yellow, green, emptyColor)); 
edgesArr.push(pieceFactory('V', 'v', yellow, red, emptyColor)); 
edgesArr.push(pieceFactory('W', 'w', yellow, blue, emptyColor)); 
edgesArr.push(pieceFactory('SH', 'sh', yellow, orange, emptyColor)); 

//Combined data for all the pieces
let bothArr = cornersArr.concat(edgesArr);

//Piece size setup
let sideLength = 100;
let xti = width/2;
let yti = 20;

function drawTopFace (color) {
    ctx.beginPath();
    ctx.moveTo(width/2, yti);
    ctx.lineTo(xti+sideLength*Math.sin(Math.PI/3), yti+sideLength*Math.cos(Math.PI/3));
    ctx.lineTo(xti, yti+sideLength);
    ctx.lineTo(xti-sideLength*Math.sin(Math.PI/3), yti+sideLength*Math.cos(Math.PI/3));
    ctx.fillStyle = color;
    ctx.fill();
}

function drawFrontFace (color) {
    ctx.beginPath();
    ctx.moveTo(xti, yti+sideLength);
    ctx.lineTo(xti-sideLength*Math.sin(Math.PI/3), yti+sideLength*Math.cos(Math.PI/3));
    ctx.lineTo(xti-sideLength*Math.sin(Math.PI/3), yti+sideLength*Math.cos(Math.PI/3)+sideLength);
    ctx.lineTo(xti, yti+2*sideLength);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawRightFace (color) {
    ctx.beginPath();
    ctx.moveTo(xti, yti+sideLength);
    ctx.lineTo(xti+sideLength*Math.sin(Math.PI/3), yti+sideLength*Math.cos(Math.PI/3));
    ctx.lineTo(xti+sideLength*Math.sin(Math.PI/3), yti+sideLength*Math.cos(Math.PI/3)+sideLength);
    ctx.lineTo(xti, yti+2*sideLength);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawPiece(piece) {
    ctx.clearRect(0, 0, width, height);
    drawTopFace(piece.topColor);
    drawFrontFace(piece.frontColor);
    drawRightFace(piece.rightColor);
}

function drawGreenTint() {
    ctx.beginPath();
    ctx.rect(0 , 0, width, height);
    ctx.fillStyle = 'rgba(0,255,0,0.2)';
    ctx.fill();
}

function drawRedTint() {
    ctx.beginPath();
    ctx.rect(0 , 0, width, height);
    ctx.fillStyle = 'rgba(255,0,0,0.2)';
    ctx.fill();
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    }
    while(currentDate - date < milliseconds);
}


function pickRandFromList(list) {
    let num = Math.floor(Math.random()*list.length)
    let val = list[num];
    list.splice(num,1);
    return val;
}

function resetToChosenList(option) {
    console.log('List reset');
    if(option === 'corners') {
        tempArr = cornersArr.map(x => x);
        console.log("Only corners will show up.");
    }
    else if(option === 'edges') {
        tempArr = edgesArr.map(x => x);
        console.log('Only edges will show up.');
    }
    else {
        tempArr = bothArr.map(x => x);
        console.log("Both corners and edges will show up.");
    }
}

function updateStreak() {
    streakCounter.innerText = `Streak: ${streakCount}`;
}

let tempArr = [];
let chosenOption = 'both';
let streakCount = 0;

resetToChosenList(chosenOption);
updateStreak();

let currentPiece = pickRandFromList(tempArr)
drawPiece(currentPiece);