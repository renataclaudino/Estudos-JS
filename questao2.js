// QUESTÃO 2 — Laboratório com matriz de pressões (3 pacientes, 4 dias)

function lerDados(nomes, pressao) {
    for (let i = 0; i < 3; i++) {
        nomes[i] = prompt(`Informe o nome do paciente ${i + 1}:`);
        pressao[i] = [];

        for (let j = 0; j < 4; j++) {
            pressao[i][j] = parseFloat(prompt(`Informe a pressão sistólica de ${nomes[i]} no dia ${j + 1} (em mmHg):`));
        }
    }
}

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

function sistemaLaboratorio() {
    let nomes = [];
    let pressao = [];
    lerDados(nomes, pressao);

    const nomeMaiorMedia = pacienteMaiorMedia(nomes, pressao);
    const totalAcima = totalAcima140(pressao);
    const mediasDia = mediaPorDia(pressao);

    let saida = `📋 RELATÓRIO DO LABORATÓRIO:\n`;
    saida += `- Paciente com maior média de pressão: ${nomeMaiorMedia}\n`;
    saida += `- Total de medições acima de 14.0 mmHg: ${totalAcima}\n`;
    saida += `- Médias de pressão por dia:\n`;

    for (let dia = 0; dia < mediasDia.length; dia++) {
        saida += `  Dia ${dia + 1}: ${mediasDia[dia]} mmHg\n`;
    }

    alert(saida);
}
