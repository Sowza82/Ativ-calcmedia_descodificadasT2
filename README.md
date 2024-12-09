# Cálculo de Média - Trilha 2 - JavaScript

Este é um exercício prático desenvolvido como parte da Trilha 2 do curso de JavaScript da Descodificadas. O objetivo deste exercício é implementar uma função em JavaScript que receba as notas de um aluno e calcule a média dessas notas, fornecendo também uma mensagem de aprovação ou reprovação com base no valor da média.

## Descrição

A tarefa consiste em criar uma função `calcularMedia` que:

1. Receba um array de números representando as notas de um aluno.
2. Calcule a média dessas notas.
3. Retorne uma mensagem que informe a média do aluno e se ele foi aprovado ou reprovado. Considera-se aprovado o aluno com média superior ou igual a 7.

## Requisitos

- JavaScript (preferencialmente ES6)
- Função `calcularMedia` que aceite um array de números.
- Cálculo da média das notas.
- Exibição de uma mensagem de aprovação ou reprovação baseada na média calculada.

## Exemplo de Uso

```javascript
function calcularMedia(notas) {
    const somaNotas = notas.reduce((acc, nota) => acc + nota, 0);
    const media = somaNotas / notas.length;
    
    if (media >= 7) {
        return `Média: ${media.toFixed(2)} - Aprovado!`;
    } else {
        return `Média: ${media.toFixed(2)} - Reprovado!`;
    }
}

const notasAluno = [8, 7, 9, 6];
console.log(calcularMedia(notasAluno));
