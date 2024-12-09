document.getElementById("calcular").addEventListener("click", function () {
    // Obtém os valores dos campos de entrada
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    const num4 = parseFloat(document.getElementById("num4").value);
    const num5 = parseFloat(document.getElementById("num5").value);

    // Verifica se todos os números foram preenchidos corretamente
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
        document.getElementById("resultado").textContent = "Por favor, preencha todos os campos com números válidos.";
        return;
    }

    // Calcula a média
    const media = (num1 + num2 + num3 + num4 + num5) / 5;

    // Mensagem de aprovação ou reprovação
    const status = media >= 7 ? "Aprovado" : "Reprovado";

    // Exibe o resultado com 2 casas decimais e status
    document.getElementById("resultado").textContent = `A média dos números é: ${media.toFixed(2)}. Status: ${status}`;
});

document.getElementById("limpar").addEventListener("click", function () {
    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
    document.getElementById("num3").value = '';
    document.getElementById("num4").value = '';
    document.getElementById("num5").value = '';
    document.getElementById("resultado").textContent = ''; 
});
