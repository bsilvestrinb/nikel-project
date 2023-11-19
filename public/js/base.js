const nome = "Bruno Silvestrin";
let nome2 = '';

let pessoa = {
    nome: 'Bruno',
    idade: 34,
    trabalho: 'marketing',
}

let nomes = ['Bruno', 'Carol', 'Maria'];
let pessoas = [
    {
        nome: 'Bruno',
        idade: 34,
        trabalho: 'marketing',
    },
    {
        nome: 'Carol',
        idade: 28,
        trabalho: 'RH',
    },
    {
        nome: 'Maria',
        idade: 7,
        trabalho: 'nada',
    }
];

function alterarNome() {
    nome2 = 'Bitteca';
    console.log('valor alterado');
    console.log(nome2);
}


function recebeEalteraNome(NovoNome) {
    nome2 = NovoNome;
    console.log('valor alterado recebendo um nome');
    console.log(nome2);

}

function imprimirPessoa(x){
    console.log('Nome:');
    console.log(x.nome);

    console.log('Idade:');
    console.log(x.idade);

    console.log('Trabalho:');
    console.log(x.trabalho);
    
}
function imprimirPessoas();
    pessoas.forEach

//imprimirPessoa(pessoa);
//recebeEalteraNome('Bruninho')
//recebeEalteraNome('Bunão')
//alterarNome();