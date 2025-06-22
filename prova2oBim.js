Resolução da 1a. questão da prova
// Função para ler os dados de 5 pacientes via prompt()
function lerPacientes(pacientes) {
   for (let i = 0; i < 5; i++) {
        let objeto = {
            nome : prompt(Informe o nome do paciente ${i + 1}:),
            idade : Number(prompt(Informe a idade de ${nome}:)),
            especialidade : prompt(Informe a especialidade (ex: cardiologia, pediatria, clínico geral) de ${nome}:).toLowerCase(),
            pressao : parseFloat(prompt(Informe a pressão arterial de ${nome} (em mmHg):))
        }
        pacientes.push(objeto);
    }
}
 
// Função que retorna o nome do paciente com maior pressão arterial
function pacienteComMaiorPressao(pacientes) {
    let maior = pacientes[0];
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].pressao > maior.pressao) {
            maior = pacientes[i];
        }
    }
    return maior.nome;
}
 
// Função que retorna a quantidade de pacientes com idade > 60 e pressão > 14.0
function idososComPressaoAlta(pacientes) {
    let contador = 0;
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].idade > 60 && pacientes[i].pressao > 14.0) {
            contador++;
        }
    }
    return contador;
}
 
// Função que calcula a média de idade dos pacientes atendidos em "cardiologia"
function mediaIdadeCardiologia(pacientes) {
    let soma = 0;
    let cont = 0;
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidade === "cardiologia") {
            soma += pacientes[i].idade;
            cont++;
        }
    }
 
    if (cont === 0) {
        return "Nenhum paciente de cardiologia.";
    } else {
        return (soma / cont).toFixed(2);
    }
}
 
// Função principal que chama as demais
function sistemaClinica() {
    let pacientes = []
    lerPacientes(pacientes);
 
    const nomeMaiorPressao = pacienteComMaiorPressao(pacientes);
    const qtdeIdososPressaoAlta = idososComPressaoAlta(pacientes);
    const mediaIdadeCardio = mediaIdadeCardiologia(pacientes);
 
    const resultado = 
        Paciente com maior pressão arterial: ${nomeMaiorPressao}<br>
        Quantidade de pacientes com mais de 60 anos e pressão > 14.0: ${qtdeIdososPressaoAlta}<br>
        Média de idade dos pacientes de cardiologia: ${mediaIdadeCardio}
    ;
 
    alert(resultado);
}
 

e esse exercicio

Resolução da 2a. questão


 
// 1. Leitura dos dados
function lerDados(nomes, pressao) {
    for (let i = 0; i < 3; i++) {
        nomes[i] = prompt(Informe o nome do paciente ${i + 1}:);
        pressao[i] = [];
        for (let j = 0; j < 4; j++) {
            pressao[i][j] = parseFloat(prompt(Informe a pressão sistólica de ${nomes[i]} no dia ${j + 1} (em mmHg):));
        }
    }
}
 
// 2. Paciente com maior média de pressão arterial
function pacienteMaiorMedia(nomes, pressao) {
    let maiorMedia = 0;
    let nomeMaior = "";
 
    for (let i = 0; i < 3; i++) {
        let soma = 0;
        for (let j = 0; j < 4; j++) {
            soma += pressao[i][j];
        }
        let media = soma / 4;
 
        if (i === 0 || media > maiorMedia) {
            maiorMedia = media;
            nomeMaior = nomes[i];
        }
    }
 
    return nomeMaior;
}
 
// 3. Número total de medições acima de 14.0
function totalAcima140(pressao) {
    let cont = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            if (pressao[i][j] > 14.0) {
                cont++;
            }
        }
    }
    return cont;
}
 
// 4. Média de pressão por dia (coluna)
function mediaPorDia(pressao) {
    let medias = [];
    for (let j = 0; j < 4; j++) {
        let soma = 0;
        for (let i = 0; i < 3; i++) {
            soma += pressao[i][j];
        }
        medias[j] = (soma / 3).toFixed(2);
    }
    return medias;
}
 
// Função principal
function sistemaLaboratorio() {
    let nomes = []; // vetor com os nomes dos 3 pacientes
    let pressao = []; // matriz 3x4 para as medições
    lerDados(nomes, pressao);
 
    const nomeMaiorMedia = pacienteMaiorMedia(nomes, pressao);
    const totalAcima = totalAcima140(pressao);
    const mediasDia = mediaPorDia(pressao);
 
    let saida = Relatório do Laboratório:\n;
    saida += Paciente com maior média de pressão: ${nomeMaiorMedia}\n;
    saida += Total de medições acima de 14.0 mmHg: ${totalAcima}\n;
    saida += Médias de pressão por dia:\n;
 
    for (let dia = 0; dia < mediasDia.length; dia++) {
        saida += - Dia ${dia + 1}: ${mediasDia[dia]} mmHg\n;
    }
 
    alert(saida);
}
 