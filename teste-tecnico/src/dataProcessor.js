const dayjs = require('dayjs');


function calcularIdade(dataNascimento) {
    const hoje = dayjs();
    const nascimento = dayjs(dataNascimento);
    return hoje.diff(nascimento, 'year');
}


function filtrarPessoasMaiores18(pessoas) {
    return pessoas.filter(pessoa => calcularIdade(pessoa.birthday) > 18);
}


function ordenarPessoasPorNome(pessoas) {
    return pessoas.sort((a, b) => a.name.localeCompare(b.name));
}

module.exports = {
    calcularIdade,
    filtrarPessoasMaiores18,
    ordenarPessoasPorNome
};
