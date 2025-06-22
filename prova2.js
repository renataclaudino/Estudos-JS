function lerPacientes(pacientes) {
    for (let i = 0; i<5; i++){
        let nome = prompt('Informe o nome do paciente ${i+1}: ');
        let idade = parseInt(prompt('Informe a idade de ${nome}:'));
        let especialidade = prompt('Informe a especialidade (ex:cardiologista, ortopedista...) de ${nome}: ').toLowerCase;
        let pressao = parseFloat(prompt('Informe a pressão arterial de ${nome} em mmHg): '));

        let paciente = {
            nome: nome,
            idade: idade,
            especialidade: especialidade,
            pressao: pressão,
    };

    paciente.push(paciente);

}
}

function  pacientePressaoMaior(pacientes) {
    let maior = pacientes [0];
    for(let i =i; i< pacientes.length; i++){
        maior = pacientes[i];
    }
}
return maior.nome;

function idososPressaoAlta(pacientes) {
    let contatador = 0;
    for (let i = 0; i<pacientes;length, i++){
        if (pacientes[i].idade > 60 && pacientes[i].pressao > 14.0){
            contador++;
        }
    }
    return contador;
}
function medidaIdadeCardilogista(paciantes){
    let soma = 0;
    let contador = 0;
    for (let i =0; i< pacientes.length; i++){
        if (pacientes[i].especialidade === "cardiologista"){
            soma += pacientes[i].idade;
            contador++;
        }
    }
    if (contador === 0) {
        return "nenhum paciente de cardiologia!";
    } else{
        return (soma/contador).toFixed(2);
    }
}