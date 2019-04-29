/**
 * ConverterDolaremReal
 * @author Gustavo
 */

function CalcularPreco(){
    let Homen, Mulher, Crianca, KgCarne, LatadeCerveja, LatadeRefrigerante, CalcularValor, Carne, Cerveja, Refrigerante
    Homen = parseFloat(frmChurrascoCalculo.txtHomen.value.replace(",","."))
    Mulher = parseFloat(frmChurrascoCalculo.txtMulher.value.replace(",","."))
    Crianca = parseFloat(frmChurrascoCalculo.txtCriança.value.replace(",","."))
    KgCarne = parseFloat(frmChurrascoCalculo.txtKgCarne.value.replace(",","."))
    LatadeCerveja = parseFloat(frmChurrascoCalculo.txtLatadeCerveja.value.replace(",","."))
    LatadeRefrigerante = parseFloat(frmChurrascoCalculo.txtLatadeRefrigerante.value.replace(",","."))
    Carne = ((KgCarne * 30) / 100) * Homen + ((KgCarne * 30) / 100) * Mulher + ((KgCarne * 10) / 100) * Crianca
    Cerveja =((LatadeCerveja * 12) * Homen) + ((LatadeCerveja * 4) * Mulher)
    Refrigerante =((LatadeRefrigerante * 4) * Mulher) + ((LatadeRefrigerante * 4) * Crianca)
    CalcularValor =((KgCarne * 30) / 100) * Homen + ((KgCarne * 30) / 100) * Mulher + ((KgCarne * 10) / 100) * Crianca + ((LatadeCerveja * 12) * Homen) + ((LatadeCerveja * 4) * Mulher) + ((LatadeRefrigerante * 4) * Mulher) + ((LatadeRefrigerante * 4) * Crianca)
    frmChurrascoCalculo.txtTotalCarne.value=Carne.toFixed(2)
    frmChurrascoCalculo.txtTotalCerveja.value=Cerveja.toFixed(2)
    frmChurrascoCalculo.txtTotalRefrigerante.value=Refrigerante.toFixed(2)
    frmChurrascoCalculo.txtResultado.value=CalcularValor.toFixed(2)
 }