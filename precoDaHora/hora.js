/**
 * @author Gustavo
 */
function calcularvalor() {
    let salario, custo, hora, carga
    salario = parseFloat(frmsalario.txtsalario.value.replace(",", "."))
    custo = parseFloat(frmsalario.txtcusto.value.replace(",", "."))
    carga = parseFloat(frmsalario.txtcarga.value.replace(",", "."))
    hora = (((salario * 30) / 100) + ((salario * 20) / 100) + salario + custo) / carga
    frmsalario.txthora.value = hora.toFixed(2)
}