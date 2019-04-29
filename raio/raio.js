/**
 * @author Gustavo
 */
function calcularRaio() {
    let circunferencia, raio
    circunferencia = parseFloat(frmRaio.txtCircunferencia.value.replace(",", "."))
    raio = (Math.PI * (circunferencia ** 2)) 
    frmRaio.txtRaio.value = raio.toFixed(4)
}