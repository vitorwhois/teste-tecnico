const lerCSV = require("../src/csvReader");
const fs = require("fs");
const csv = require("csv-parser");

jest.mock("fs");
jest.mock("csv-parser");

describe("lerCSV", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("deve ler e parsear um arquivo CSV corretamente", async () => {
    const csvData = [
      {
        name: "Guilherme",
        email: "guilherme.veras@200dev.com",
        birthday: "2000-04-11",
        country: "Brazil",
      },
    ];

    const mockReadStream = {
      pipe: jest.fn().mockReturnThis(),
      on: jest.fn((event, callback) => {
        if (event === "data") {
          csvData.forEach(callback);
        }
        if (event === "end") {
          callback();
        }
        return mockReadStream;
      }),
    };

    fs.createReadStream.mockReturnValue(mockReadStream);
    fs.existsSync.mockReturnValue(true);

    const resultado = await lerCSV("caminho/para/o/arquivo.csv");
    expect(resultado).toEqual(csvData);
  });

  // Adicionar testes para verificar erros
});
