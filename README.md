# Projeto de Processamento de Dados CSV

Este projeto lê um arquivo CSV contendo informações sobre pessoas, filtra aquelas que têm mais de 18 anos, ordena as pessoas por nome e escreve os resultados em um arquivo de texto, além disso, para cada pessoa maior de 18 anos, em
ordem alfabética, adiciona uma linha no arquivo de texto com o seguinte formato: "NomeDaPessoa tem mais X anos".

## Estrutura do Projeto

```
├── src
│   ├── csvReader.js
│   ├── dataProcessor.js
│   ├── fileWriter.js
│   └── index.js
├── data
│   ├── input
│   │   └── dados.csv
│   └── output
│       └── (gerado automaticamente)
├── test
│   ├── csvReader.test.js
│   ├── dataProcessor.test.js
│   └── fileWriter.test.js
├── package.json
└── README.md
```


### Pré-requisitos
- Node.js v20.12.2 (ou superior)
- npm (Node Package Manager)

### Instalação

#### Dependências do Projeto
Instale as seguintes dependências e dependências de desenvolvimento:
- Dependências do Projeto:
    - csv-parser: Para parsear arquivos CSV.
    - dayjs: Para manipulação de datas.
- Dependências de Desenvolvimento:
   - jest: Para testes unitários.

Para instalar as dependências, execute:

ˋˋˋnpm install csv-parser dayjs
npm install --save-dev jestˋˋˋ

#### Comando Completo de Instalação
Execute o seguinte comando para instalar todas as dependências:

ˋˋˋnpm install
 ˋˋˋ

## Execução
Para executar o script, utilize o seguinte comando:

ˋˋˋnode src/index.js src/data/input/dados.csv resultado.txt
 ˋˋˋ

### Detalhamento do Comando
- node: Comando para executar um arquivo Node.js.
- src/index.js: Caminho para o arquivo principal do script.
- src/data/input/dados.csv: Caminho para o arquivo CSV de entrada.
- resultado.txt: Nome do arquivo de saída que será gerado na pasta data/output.
Isso irá gerar um arquivo resultado.txt na pasta data/output com as informações filtradas e ordenadas.

## Explicação dos Arquivos
**src/index.js**
Arquivo principal que executa o fluxo completo:

* Lê o arquivo CSV.
* Filtra pessoas com mais de 18 anos.
* Ordena as pessoas por nome.
* Garante que o diretório de saída exista.
* Escreve os dados filtrados e ordenados em um arquivo de texto

**src/csvReader.js**
Contém a função lerCSV que lê e parseia um arquivo CSV retornando uma lista de objetos.

**src/dataProcessor.js**
Contém funções para processamento de dados:
- calcularIdade: Calcula a idade com base na data de nascimento.
- filtrarPessoasMaiores18: Filtra pessoas com mais de 18 anos.
- ordenarPessoasPorNome: Ordena as pessoas em ordem alfabética pelo nome.

**src/fileWriter.js**
Contém a função escreverArquivoTXT que escreve os dados das pessoas em um arquivo TXT.

## Implementação de Testes com Jest

#### Instalação do Jest

Primeiro, instale o Jest como dependência de desenvolvimento:

ˋˋˋnpm install --save-dev jest
 ˋˋˋ
 Adicione um script no package.json para rodar os testes:

 ˋˋˋ"scripts": {
    "test": "jest"
}
 ˋˋˋ
 #### Testes para csvReader.js

ˋˋˋ// test/csvReader.test.js
const lerCSV = require('../src/csvReader');
const fs = require('fs');
const csv = require('csv-parser');

jest.mock('fs');
jest.mock('csv-parser');

describe('lerCSV', () => {
    it('deve ler e parsear um arquivo CSV corretamente', async () => {
        const csvData = 'name,email,birthday,country\nGuilherme,guilherme.veras@200dev.com,2000-04-11,Brazil\n';
        const mockReadStream = {
            pipe: jest.fn().mockReturnThis(),
            on: jest.fn((event, callback) => {
                if (event === 'data') {
                    callback(csvData);
                }
                if (event === 'end') {
                    callback();
                }
                return mockReadStream;
            })
        };
        fs.createReadStream.mockReturnValue(mockReadStream);

        const resultado = await lerCSV('caminho/para/o/arquivo.csv');
        expect(resultado).toEqual([{ name: 'Guilherme', email: 'guilherme.veras@200dev.com', birthday: '2000-04-11', country: 'Brazil' }]);
    });
});
 ˋˋˋ
 #### Testes para dataProcessor.js

 ˋˋˋ// test/dataProcessor.test.js
const { calcularIdade, filtrarPessoasMaiores18, ordenarPessoasPorNome } = require('../src/dataProcessor');
const dayjs = require('dayjs');

describe('calcularIdade', () => {
    it('deve calcular a idade corretamente', () => {
        const birthday = '2000-04-11';
        const idade = calcularIdade(birthday);
        expect(idade).toBe(dayjs().year() - 2000);
    });
});

describe('filtrarPessoasMaiores18', () => {
    it('deve filtrar pessoas com mais de 18 anos', () => {
        const pessoas = [{ birthday: '2000-04-11' }, { birthday: '2010-04-11' }];
        const resultado = filtrarPessoasMaiores18(pessoas);
        expect(resultado).toEqual([{ birthday: '2000-04-11' }]);
    });
});

describe('ordenarPessoasPorNome', () => {
    it('deve ordenar as pessoas por nome', () => {
        const pessoas = [{ name: 'Carlos' }, { name: 'Ana' }];
        const resultado = ordenarPessoasPorNome(pessoas);
        expect(resultado).toEqual([{ name: 'Ana' }, { name: 'Carlos' }]);
    });
});
ˋˋˋ
#### Testes para fileWriter.js

ˋˋˋ// test/fileWriter.test.js
const fs = require('fs');
const escreverArquivoTXT = require('../src/fileWriter');
const { calcularIdade } = require('../src/dataProcessor');

jest.mock('fs');
jest.mock('../src/dataProcessor', () => ({
    calcularIdade: jest.fn()
}));

describe('escreverArquivoTXT', () => {
    it('deve escrever o conteúdo corretamente no arquivo TXT', () => {
        calcularIdade.mockReturnValue(24);
        const pessoas = [{ name: 'Guilherme', birthday: '2000-04-11' }];
        const caminhoArquivo = 'caminho/para/o/arquivo.txt';

        escreverArquivoTXT(pessoas, caminhoArquivo);
        
        const conteudoEsperado = 'Existem 1 pessoas maiores de 18 anos\nGuilherme tem mais 24 anos';
        expect(fs.writeFileSync).toHaveBeenCalledWith(caminhoArquivo, conteudoEsperado, 'utf8');
    });
});
 ˋˋˋ
#### Rodando os Testes

Para rodar os testes, use o comando:
ˋˋˋnpm testˋˋˋ

## Melhorias Sugeridas
