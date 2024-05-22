const fs = require("fs");
const escreverArquivoTXT = require("../src/fileWriter");
const { calcularIdade } = require("../src/dataProcessor");

jest.mock("fs");
jest.mock("../src/dataProcessor", () => ({
  calcularIdade: jest.fn(),
}));

describe("escreverArquivoTXT", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("deve escrever o conteúdo corretamente no arquivo TXT", () => {
    calcularIdade.mockReturnValue(24);
    const pessoas = [{ name: "Guilherme", birthday: "2000-04-11" }];
    const caminhoArquivo = "caminho/para/o/arquivo.txt";

    escreverArquivoTXT(pessoas, caminhoArquivo);

    const conteudoEsperado =
      "Existem 1 pessoas maiores de 18 anos\nGuilherme tem mais de 24 anos";
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      caminhoArquivo,
      conteudoEsperado,
      { encoding: "utf8" }
    );
  });
});
