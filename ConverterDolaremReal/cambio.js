/**
 * @author Gustavo
 */

 function CalcularDolar(){
    let Dolar, Real, CalcularDolar
    Dolar = parseFloat(frmConverterDolaremReal.txtDolar.value.replace(",","."))
    Real = parseFloat(frmConverterDolaremReal.txtReal.value.replace(",","."))
    CalcularDolar =(Real * Dolar) 
    frmConverterDolaremReal.txtResultado.value=CalcularDolar
 }