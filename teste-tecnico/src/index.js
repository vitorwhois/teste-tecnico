const path = require('path'); // Importa o módulo 'path' do Node.js para manipulação de caminhos
const fs = require('fs'); // Importa o módulo 'fs' do Node.js para manipulação de arquivos

const lerCSV = require('./csvReader'); 
const { filtrarPessoasMaiorIdade, ordenarPessoasPorNome } = require('./dataProcessor'); 
const escreverArquivoTXT = require('./fileWriter'); 
const idadeLimite = 18; // Modifique de acordo com lei para maior idade.



async function main() {
    const [caminhoCSV, nomeArquivoTXT] = process.argv.slice(2);

    if (!caminhoCSV || !nomeArquivoTXT) {
        console.error('Por favor, forneça os caminhos para os arquivos CSV e TXT.');
        process.exit(1);
    }

    try {
        const pessoas = await lerCSV(caminhoCSV);
        const pessoasMaioresIdade  = filtrarPessoasMaiorIdade(pessoas, idadeLimite);
        const pessoasOrdenadas = ordenarPessoasPorNome(pessoasMaioresIdade);

        // Define o caminho de saída para o arquivo TXT
        const caminhoTXT = path.join(__dirname, 'data', 'output', nomeArquivoTXT);

        // Confirma se o diretorio output  existe
        const outputDir = path.join(__dirname, 'data', 'output');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
            console.log('Diretório de saída criado com sucesso.');
        }

        escreverArquivoTXT(pessoasOrdenadas, caminhoTXT);
        console.log('Arquivo TXT criado com sucesso!');
    } catch (err) {
        console.error('Erro ao processar arquivos:', err.message);
        process.exit(1);
    }
}

main();
