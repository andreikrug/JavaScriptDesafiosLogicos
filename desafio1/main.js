
// Desafio 1

function imparOuPar(num) 
{
    if(num % 2 == 0)
    {
        console.log(`Numéro: ${num} é par`)
    } else {
        console.log(`Número: ${num} é ímpar`)
    }
    
}

// Deixando esse desafio mais interessante recebendo um array e trabalhando com map
const nums = [1, 2, 3, 4];

let imparOuParComMap = nums.map((item) => {
        if(item % 2 == 0)
        {
            return (`${item} é par`);
        } else {
            return(`${item} é impar`);
        }
    })



// Desafio 2: 
let a = 0;
const primeiroMenor = (arr) => {
    a = Math.min(...arr);
}

let b = 0;
const segundoMaior = (arr) => {
    
    for(let i = 0; i<arr.length; i++)
    {
       if(arr[i] != a){
            b = arr[i];
            break;
       }
       if(arr[i] < b && arr[i] != a){
            b = arr[i];
       }
    }
}

primeiroMenor(nums);
segundoMaior(nums);

console.log(a + b);






