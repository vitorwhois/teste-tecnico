const fs = require('fs');
const csv = require('csv-parser');


function lerCSV(caminhoArquivo) {
    return new Promise((resolve, reject) => {
        const resultados = [];
        fs.createReadStream(caminhoArquivo)
            .pipe(csv())
            .on('data', (dados) => resultados.push(dados))
            .on('end', () => resolve(resultados))
            .on('error', (err) => reject(err));
    });
}

module.exports = lerCSV;
