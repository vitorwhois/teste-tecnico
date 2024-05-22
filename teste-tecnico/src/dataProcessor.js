const dayjs = require('dayjs');


function calcularIdade(dataNascimento) {
    //Formato esperado de data(YYYY-MM-DD).
    const dataRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dataRegex.test(dataNascimento)) {
        throw new Error(`Data de nascimento inválida: ${dataNascimento}`);
    }
    
    const hoje = dayjs();
    const nascimento = dayjs(dataNascimento);
    return hoje.diff(nascimento, 'year');
}


function filtrarPessoasMaiorIdade(pessoas, idadeLimite) {
    return pessoas.filter(pessoa => calcularIdade(pessoa.birthday) > idadeLimite);
}


function ordenarPessoasPorNome(pessoas) {
    return pessoas.sort((a, b) => a.name.localeCompare(b.name));
}

module.exports = {
    calcularIdade,
    filtrarPessoasMaiorIdade,
    ordenarPessoasPorNome
};
