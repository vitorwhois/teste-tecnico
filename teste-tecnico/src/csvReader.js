const fs = require('fs');
const csv = require('csv-parser');

function lerCSV(caminhoArquivo) {
    return new Promise((resolve, reject) => {
        if (!caminhoArquivo || typeof caminhoArquivo !== 'string') {
            reject(new Error('Caminho do arquivo CSV inválido.'));
            return;
        }

        if (!fs.existsSync(caminhoArquivo)) {
            reject(new Error('Arquivo CSV não encontrado.'));
            return;
        }

        const resultados = [];
        fs.createReadStream(caminhoArquivo)
            .pipe(csv())
            .on('data', (dados) => resultados.push(dados))
            .on('end', () => {
                if (resultados.length === 0) {
                    reject(new Error('O arquivo CSV está vazio.'));
                } else {
                    resolve(resultados);
                }
            })
            .on('error', (err) => reject(new Error(`Erro ao ler o arquivo CSV: ${err.message}`)));
    });
}

module.exports = lerCSV;

