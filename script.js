function calc_n() {
    var resultado = document.getElementById('ope_ent').value;
    if (resultado === "Adição") {
        var num1 = parseFloat(document.getElementById('n1').value)
        var num2 = parseFloat(document.getElementById('n2').value)
        var total = num1 + num2;
        document.getElementById('result').textContent = "Resultado: " + total
    }
    if (resultado === "Subtração") {
        var num1 = parseFloat(document.getElementById('n1').value);
        var num2 = parseFloat(document.getElementById('n2').value);
        var total = num1 - num2;
        document.getElementById('result').textContent = "Resultado: " + total.toFixed(2);
    }
    if (resultado === "Multiplicação") {
        var num1 = parseFloat(document.getElementById('n1').value);
        var num2 = parseFloat(document.getElementById('n2').value);
        var total = num1 * num2;
        document.getElementById('result').textContent = "Resultado: " + total.toFixed(2);
    }
    if (resultado === "Divisão") {
        var num1 = parseFloat(document.getElementById('n1').value);
        var num2 = parseFloat(document.getElementById('n2').value);
        var total = num1 / num2;
        document.getElementById('result').textContent = "Resultado: " + total.toFixed(2);
    }
}