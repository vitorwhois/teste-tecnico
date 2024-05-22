const fs = require('fs');
const { calcularIdade } = require('./dataProcessor');


function escreverArquivoTXT(pessoas, caminhoArquivo) {
    const conteudo = pessoas.map(pessoa => `${pessoa.name} tem mais de ${calcularIdade(pessoa.birthday)} anos`);
    conteudo.unshift(`Existem ${pessoas.length} pessoas maiores de 18 anos`);
    fs.writeFileSync(caminhoArquivo, conteudo.join('\n'), { encoding: 'utf8' });
}


module.exports = escreverArquivoTXT;
