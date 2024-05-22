const fs = require('fs');
const { calcularIdade } = require('./dataProcessor');


function escreverArquivoTXT(pessoas, caminhoArquivo) {
    const conteudo = [];
    conteudo.push(`Existem ${pessoas.length} pessoas maiores de 18 anos`);
    pessoas.forEach(pessoa => {
        const idade = calcularIdade(pessoa.birthday);
        // Corrigido o texto da especificação "de"
        conteudo.push(`${pessoa.name} tem mais de ${idade} anos`);
    });
    fs.writeFileSync(caminhoArquivo, conteudo.join('\n'), 'utf8');
}

module.exports = escreverArquivoTXT;
