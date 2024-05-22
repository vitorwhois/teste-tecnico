# Teste Técnico - Contagem de Pessoas por Idade

## Descrição do Projeto

O objetivo deste projeto é criar uma query SQL que retorna a quantidade de pessoas por idade a partir de uma tabela chamada `people`. A tabela armazena informações de pessoas, incluindo seus nomes e datas de nascimento. Utilizamos a ferramenta XAMPP para configurar um servidor local e o phpMyAdmin para gerenciar o banco de dados MySQL.

## Estrutura do Projeto

O projeto consiste em:

1. **Configuração do Ambiente**:

   - Instalação e configuração do XAMPP.
   - Criação de um banco de dados MySQL no phpMyAdmin.

2. **Criação da Tabela**:

   - Tabela `people` com colunas `id`, `name`, e `birthday`.

3. **Inserção de Dados**:

   - Inserção de registros na tabela `people`.

4. **Consulta SQL**:
   - Query SQL para calcular a idade de cada pessoa e contar a quantidade de pessoas por idade.

## Passos para Configuração do Ambiente

### 1. Instalação do XAMPP

- Faça o download do XAMPP do site oficial [Apache Friends](https://www.apachefriends.org/index.html).
- Siga as instruções de instalação para seu sistema operacional.

### 2. Iniciar o Servidor XAMPP

- Abra o painel de controle do XAMPP.
- Inicie os módulos `Apache` e `MySQL`.

### 3. Acessar o phpMyAdmin

- Abra o navegador e vá para `http://localhost/phpmyadmin`.

## Criação da Tabela e Inserção de Dados

No phpMyAdmin, siga os seguintes passos para criar a tabela e inserir dados:

### 1. Criar Banco de Dados

- Clique em "Novo" para criar um novo banco de dados.
- Nomeie o banco de dados como `test_db` e clique em "Criar".

### 2. Criar Tabela `people`

- Selecione o banco de dados `test_db`.
- Clique em "SQL" e insira a seguinte query para criar a tabela `test_db`:

  ```sql
  CREATE TABLE people (
    id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    birthday TIMESTAMP NOT NULL
  );
  ```

### 3. Inserir Dados na Tabela `people`

- Clique em "SQL" novamente e insira as seguintes queries para adicionar registros na tabela people:
  ```sql
  INSERT INTO people (id, name, birthday) VALUES (1, 'Vitor', '1980-01-10');
  INSERT INTO people (id, name, birthday) VALUES (2, 'Guilherme', '1990-02-02');
  INSERT INTO people (id, name, birthday) VALUES (3, 'Maria', '2000-03-06');
  INSERT INTO people (id, name, birthday) VALUES (4, 'Ana', '2010-04-05');
  INSERT INTO people (id, name, birthday) VALUES (5, 'Paulo', '2020-05-06');
  ```
- Clique em "Continuar" para executar as queries.

### 4. Consulta SQL

A consulta SQL para calcular a idade de cada pessoa e contar a quantidade de pessoas por idade é a seguinte:

    ```sql
    SELECT TIMESTAMPDIFF(YEAR, birthday, CURDATE()) AS Idade, COUNT(*) AS Quantidade
    FROM people
    GROUP BY Idade
    ORDER BY Idade;
    ```
