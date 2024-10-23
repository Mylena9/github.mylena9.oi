// ex 1

function ParOUImpar (numero) {
    if(numero % 2 === 0) {
        return "Par"
    }else{
        return "Impar"
    }
}

console.log(ParOUImpar(9));
console.log(ParOUImpar(8));

//ex 3

function verificaAprovacao (nota1, nota2) {
    const media = (nota1 + nota2) / 2;

    if (media >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

const resultado = verificaAprovacao(6, 6);
console.log(resultado);

//ex 4

function podeVotar (idade) {
    if(idade >= 16) {
        return "Pode votar";
    } else {
        return "Não pode votar";
    }
}

const result = podeVotar(19);
console.log(result);

//ex 5

function maiorNumero (num1, num2) {
    return num1 > num2 ? num1 : num2;
}

const Resultado = maiorNumero(10, 20);
console.log(Resultado);

//ex 6

function verificaHoraEXtra (horasTrabalhadas) {
    if(horasTrabalhadas > 40) {
        return "Fez horas extras";
    } else {
        return "Não fez horas extras";
    }
}

const resultandoem = verificaHoraEXtra(30);
console.log(resultandoem);

//ex 7

function verificaIntervalo (num) {
    if(num >= 10 && num <= 50) {
        return "Está no intervalo";
    } else {
        return "Não está no intervalo";
    }
}

const resulta = verificaIntervalo(35);
console.log(resulta);

//ex 8

function verificaletra (letra) {
    const vogais = ["a", "e", "i", "o", "u"];

    return vogais.includes(letra) ? "Vogal" : "consoante";
}

const results = verificaletra("u");
console.log(results);

//ex 9

let mes = "janeiro"

if('JaneiroDezembroJulho'.includes(mes)) {
    console.log('é mês de férias')
}else{
    console.log('não é mês de férias')
}

//ex 10

let CalculaNota = (nota) => {
    if (nota >= 90) {
        return "A";
    }else if (nota >= 80) {
        return "B";
    }else if (nota >= 70) {
        return "C";
    }else if (nota >= 60) {
        return "D";
    }else {
        return "F"; 
    }

}

let notaAluno = 97;
let nota = CalculaNota(notaAluno);
console.log(nota);

//MÉDIA COMPLEXIDADE

//ex 1 

let a = 13;
let b = 25;
let c = 30;

if (a > b && a > c) {
    console.log(`${a} é o maior número`);
}
else if (b > a && b > c) {
    console.log(`${b} é o maior número`);
}
else {
    console.log(`${c} é o maior número`);
}

//ex 2

let texto = "string"

if ("string" === texto) {
    console.log("A palavra começa com a letra maiúscula")
}
else if ("string" === texto) {
    console.log("A palavra começa com a letra minúscula")
}

//ex 3

let temperatura = 20 

if(temperatura < 15) {
    console.log("moderado")
}
else{
    console.log("quente")
}

//ex 4

let year = 2024;
let isYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

console.log(isYear);

//ex 5

let num = 30;
if(num % 5 === 0) {
    console.log(`o numero ${num} é divisivel por 5`);
}
else{
    console.log(`o numero ${num} nao é divisivel por 5`);
}

//ex 6

let semáforo = `vermelho`;

if(semáforo === `verde`) {
    console.log(`Pode seguir seu caminho`)
}

else if(semáforo === `amarelo`) {
    console.log(`Ande mais devagar`)
}

else if(semáforo === `vermelho`) 
    console.log(`Pare o veículo`)

//ex 7









