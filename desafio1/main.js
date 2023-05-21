
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








