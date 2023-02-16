let d = 1;

while (d <= 31) {
    dia.innerHTML += '<option>' + d + '</option>';

    d++;
}

let m = 0;
let meses = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];

while (m < 12) {
    mes.innerHTML += '<option>' + meses[m] + '</option>';

    m++;
}

let a = 2023;
    for (let a = 2023; a >= 1950; a--) {
    ano.innerHTML += '<option>' + a + '</option>';

    a--;
}
