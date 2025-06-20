function calcularDesconto() {
    let categoria = prompt("Digite sua categoria: comum, prata ou ouro").toLowerCase();
    let valor = parseFloat(prompt("Digite o valor da compra:"));

    let desconto = 0;

    if (categoria === "ouro") {
        desconto = 0.2; // 20%
    } else if (categoria === "prata") {
        desconto = 0.1; // 10%
    } else if (categoria === "comum") {
        desconto = 0.05; // 5%
    } else {
        alert("Categoria inválida.");
        return;
    }

    let valorFinal = valor - (valor * desconto);

    alert("Você pagará R$ " + valorFinal.toFixed(2) + " após o desconto.");
}
