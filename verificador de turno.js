function verificarTurno() {
    let hora = parseInt(prompt("Digite a hora atual (0 a 23):"));

    if (hora >= 6 && hora < 12) {
        alert("Bom dia! É manhã.");
    } else if (hora >= 12 && hora < 18) {
        alert("Boa tarde! É tarde.");
    } else if ((hora >= 18 && hora <= 23) || (hora >= 0 && hora < 6)) {
        alert("Boa noite! É noite.");
    } else {
        alert("Hora inválida.");
    }
}
