const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
function showResults(r){
   let novo = document.createElement('div');
   let main = document.querySelector('main')
   novo.append(r)
   main.appendChild(novo)
}

function kata1(){
    let resultado = [];
        for(let n = 1; n <= 25; n++){
            resultado.push(n);            
        }
        showResults("Kata1: " + resultado);
}
kata1();


function kata2() {
    let resultado = [];
        for(let n = 25; n >0 ; n--){
            resultado.push(n);
        }
        showResults("Kata2: " + resultado);
}
kata2();

function kata3() {
    let resultado = [];
        for(n = -1; n >=-25; n--){
            resultado.push(n)
    }
    showResults("Kata3: " + resultado);
}
kata3();

function kata4() {
    let resultado = [];
    for (let n = -25; n <= -1; n++) {
        resultado.push(n);
    }
    showResults("Kata4: " + resultado);
}
kata4();

function kata5() {
    let resultado = [];
    for (let n = 25; n >= -25; n -= 2) {
        resultado.push(n);
    }
    showResults("Kata5: " + resultado);
}
kata5();

function kata6() {
    let resultado = [];
    for (let n = 1; n <=100; n++){
        if(n % 3 == 0) {
            resultado.push(n)
        }
    }
    showResults("Kata6: " + resultado);
}
kata6();

function kata7() {
    let resultado = [];
    for (let n = 1; n <=100; n++){
        if(n % 7 == 0) {
            resultado.push(n)
        }
    }
    showResults("Kata7: " + resultado);
}
kata7();


function kata8() {
    let resultado = [];
    for (let n = 100; n >=0; n--){
        if(n % 3 == 0 || n % 7 == 0) {
            resultado.push(n)
        }
    }
    showResults("Kata8: " + resultado);
}
kata8();

function kata9() {
    let resultado = [];
    for (let n = 0; n <= 100; n += 5){
        if(n % 2 !== 0) {
            resultado.push(n)
        }
    }
    showResults("Kata9: " + resultado);
}
kata9();


function kata10() {
    let resultado = [];
    for (let n = 0; n < sampleArray.length; n++) {
        resultado.push(sampleArray[n]);
    }
    showResults("Kata10: " + resultado);
}
kata10();


function kata11() {
    let resultado = [];
    for (let n = 0; n < sampleArray.length; n++) {
        if (sampleArray[n] % 2 == 0){
            resultado.push(sampleArray[n]);
        }
    }
    showResults("Kata11: " + resultado);
}
kata11();

function kata12() {
    let resultado = [];
    for (let n = 0; n < sampleArray.length; n++) {
        if (sampleArray[n] % 2 !== 0){
            resultado.push(sampleArray[n]);
        }
    }
    showResults("Kata12: " + resultado);
}
kata12();


function kata13() {
    let resultado = [];
    for (let n = 0; n < sampleArray.length; n++) {
        if (sampleArray[n] % 8 == 0){
            resultado.push(sampleArray[n]);
        }
    }
    showResults("Kata13: " + resultado);
}
kata13();

function kata14() {
    let resultado = [];
    for (let n = 0; n < sampleArray.length; n++) {
        const quadrado = sampleArray[n] ** 2;
        resultado.push(quadrado);
    }
    showResults("Kata14: " + resultado);
}
kata14();

function kata15() {
    let resultado = 0;
    for (let n = 1; n <= 20; n++) {
        resultado = resultado + n;
    }
    showResults("Kata15: " + resultado);
}
kata15();

function kata16() {
    let resultado = 0;
    for (let n = 0; n < sampleArray.length; n++) {
        resultado = resultado + sampleArray[n];
    }
    showResults("Kata16: " + resultado);
}
kata16();

function kata17() {
    let resultado = sampleArray[0];
    for (let n = 0; n < sampleArray.length; n++){
        if (sampleArray[n] < resultado){
            resultado = sampleArray[n];
        }
    }
    showResults("Kata17: " + resultado);
}
kata17();

function kata18() {
    let resultado = sampleArray[0];
    for (let n = 0; n < sampleArray.length; n++){
        if (sampleArray[n] > resultado){
            resultado = sampleArray[n];
        }
    }
    showResults("Kata18: " + resultado);
}
kata18();



// function kataBonus1() {
//     // implemente o código do kata bonus 1 aqui
// }

// function kataBonus2() {
//     // implemente o código do kata bonus 2 aqui
// }

// function kataBonus3() {
//     // implemente o código do kata bonus 3 aqui
// }

// function kataBonus4() {
//     // implemente o código do kata bonus 4 aqui
// }

// function kataBonus5() {
//     // implemente o código do kata bonus 5 aqui
// }