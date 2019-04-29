/**
 * @author Gustavo
 */
function calcularcelsius() {
    let celsius, fahrenheit
    celsius = parseFloat(frmCelsius.txtcelsius.value.replace(",", "."))
    fahrenheit = (celsius * 1.8) + 32
    frmCelsius.txtfahrenheit.value = fahrenheit.toFixed(2)
}