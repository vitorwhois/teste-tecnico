# Teste Técnico para Estágio

Este teste consiste em três partes distintas

## Parte 1: Leitura de Arquivo CSV

- Projeto na pasta teste-tecnico

1. Ler o arquivo CSV -> Biblioteca csv-parser.
2. Calcular idade -> Biblioteca dayjs
3. Filtrar e ordenar os dados -> Verificar quais pessoas têm mais de 18 anos e ordenar os dados em ordem alfabética.
4. Escrever o Arquivo TXT -> Modulo fs do nodejs para escrever no arquivo txt.

Exemplo de dados:

```sql
name,email,birthday,country
Guilherme,guilherme@gmail.com,2000-04-11,Brazil
Maria,maria@gmail.com,1995-09-22,USA
John,john@outlook.com,1988-07-15,Canada
Luis,luis@ibm.com,1979-03-05,Spain
Anna,anna@yahoo.com,2002-11-30,Germany
```

## Parte 2: Implementação Frontend

- Projeto na pasta teste-front

Implemente um código utilizando a tecnologia frontend de sua escolha para reproduzir a imagem fornecida.

1. Criar um modal contendo: Titulo, botão de fechar, texto de conteúdo e dois botões.
2. Borda com grandiente linear border radius.
3. Buscar fidelidade nos espaçamentos, fontes e cores.

## Parte 3: Query SQL

- Projeto na pasta teste-sql

Crie uma query SQL que retorna a quantidade de pessoas por idade considerando a estrutura de tabela abaixo.

```sql
CREATE TABLE people (
id int not null,
name varchar(255) not null,
birthday datetime not null
);
```
