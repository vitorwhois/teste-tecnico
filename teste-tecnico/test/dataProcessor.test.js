const {
  calcularIdade,
  filtrarPessoasMaiorIdade,
  ordenarPessoasPorNome,
} = require("../src/dataProcessor");
const dayjs = require("dayjs");

describe("calcularIdade", () => {
  it("deve calcular a idade corretamente", () => {
    const birthday = "2000-04-11";
    const idade = calcularIdade(birthday);
    expect(idade).toBe(dayjs().year() - 2000);
  });

  it("deve lançar um erro para data de nascimento inválida", () => {
    const invalidDate = "2000-04-31"; // data inválida
    expect(() => calcularIdade(invalidDate)).toThrow("Data de nascimento inválida: 2000-04-31");
  });
});

describe("filtrarPessoasMaiorIdade", () => {
  it("deve filtrar pessoas com mais de uma idade limite configurável", () => {
    const pessoas = [{ birthday: "2000-04-11" }, { birthday: "2010-04-11" }];
    const idadeLimite = 18;
    const resultado = filtrarPessoasMaiorIdade(pessoas, idadeLimite);
    expect(resultado).toEqual([{ birthday: "2000-04-11" }]);
  });

  it("deve retornar uma lista vazia se nenhuma pessoa atender à idade limite", () => {
    const pessoas = [{ birthday: "2010-04-11" }, { birthday: "2012-04-11" }];
    const idadeLimite = 18;
    const resultado = filtrarPessoasMaiorIdade(pessoas, idadeLimite);
    expect(resultado).toEqual([]);
  });
});

describe("ordenarPessoasPorNome", () => {
  it("deve ordenar as pessoas por nome", () => {
    const pessoas = [{ name: "Carlos" }, { name: "Ana" }];
    const resultado = ordenarPessoasPorNome(pessoas);
    expect(resultado).toEqual([{ name: "Ana" }, { name: "Carlos" }]);
  });

  it("deve lidar corretamente com nomes iguais", () => {
    const pessoas = [{ name: "Carlos" }, { name: "Carlos" }];
    const resultado = ordenarPessoasPorNome(pessoas);
    expect(resultado).toEqual([{ name: "Carlos" }, { name: "Carlos" }]);
  });
});
