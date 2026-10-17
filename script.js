const generateBtn = document.getElementById('generateBtn');
const resultLabel1 = document.getElementById('resultLabel1');
const resultLabel2 = document.getElementById('resultLabel2');
let addLabel3 = document.getElementById('addLabel3');
const max1=100;
const max2=6;
const min1=50;
const min2=1;
generateBtn.onclick = function() {
    const random1 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
    const random2 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
    const random3 = random1 + random2;
    resultLabel1.textContent = random1;
    resultLabel2.textContent = random2;
    addLabel3.textContent = random3;
    
    document.getElementById('addLabel3').textContent = random3;
};