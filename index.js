const http = require('http');
const fs = require('fs'); // permite a manipulação de arquivos utilizando node
const hostname = "127.0.0.1";
const port = 3000;

// ---- Criação de arquivo utilizando NodeJs
fs.writeFile('danki.txt' , 'teste dankik code', function(err){ // WriteFile tem 3 parametros 1 - Nome, 2 - Conteudo e 3 -  CallBack (Function)
    if (err) throw err; // Throw lança um erro e para o programa
    console.log('O arquivo foi criado com sucesso!');
}) 

// ---- Criação de novo arquivo e Insere o conteudo depois que já existe...

fs.appendFile('danki.txt',"\n Outro conteudo", (err) => {
    if (err) throw err;
    console.log('Salvo novamente com sucesso!');
})

const server = http.createServer((req, res)=>{

    if(req.url == '/danki'){ // Só aparece as informaçoes caso esteja na Ulr /danki
    
        fs.readFile('index.html',function(err,data) {
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        })
    }else{
       return res.end();
    }
})

server.listen(port,hostname,() =>{
    console.log("Servidor está rodando!");
})














/*const fs = require('fs');
const readline = require('readline');

// Cria uma interface para ler o que o usuário digitar
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta para o usuário
rl.question('Digite o que você quer salvar: ', function(resposta) {
    // Salva o que o usuário digitou no arquivo
    fs.writeFile('danki.txt', resposta, function(err) {
        if (err) throw err;
        console.log('Arquivo criado com o seu texto!');
        rl.close(); // Fecha a interface depois de escrever
    });
});

















/*somar(50, 49);
function somar(n1,n2){
    console.log(n1 + n2);
}
setInterval(function(){
    somar(10,832)
}, 2000)*/