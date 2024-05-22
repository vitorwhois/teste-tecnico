const path = require('path'); // Importa o módulo 'path' do Node.js para manipulação de caminhos
const fs = require('fs'); // Importa o módulo 'fs' do Node.js para manipulação de arquivos

const lerCSV = require('./csvReader'); // Importa a função lerCSV do módulo csvReader.js
const { filtrarPessoasMaiores18, ordenarPessoasPorNome } = require('./dataProcessor'); // Importa as funções de processamento de dados
const escreverArquivoTXT = require('./fileWriter'); // Importa a função escreverArquivoTXT

/**
 * Função principal para executar o script.
 */
async function main() {
    const [caminhoCSV, nomeArquivoTXT] = process.argv.slice(2);

    if (!caminhoCSV || !nomeArquivoTXT) {
        console.error('Por favor, forneça os caminhos para os arquivos CSV e TXT.');
        process.exit(1);
    }

    try {
        const pessoas = await lerCSV(caminhoCSV);
        const pessoasMaiores18 = filtrarPessoasMaiores18(pessoas);
        const pessoasOrdenadas = ordenarPessoasPorNome(pessoasMaiores18);

        // Define o caminho de saída para o arquivo TXT
        const caminhoTXT = path.join(__dirname, 'data', 'output', nomeArquivoTXT);

        // Ensure the output directory exists
        const outputDir = path.join(__dirname, 'data', 'output');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        escreverArquivoTXT(pessoasOrdenadas, caminhoTXT);
        console.log('Arquivo TXT criado com sucesso!');
    } catch (err) {
        console.error('Erro ao processar arquivos:', err);
    }
}

main();
