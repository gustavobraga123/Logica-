
 function calcularImc(){
     let peso, altura, imc
     peso = parseFloat(frmImc.txtPeso.value.replace(",","."))
     altura = parseFloat(frmImc.txtAltura.value.replace(",","."))
     imc = peso / (altura * altura)
     frmImc.txtImc.value = imc.toFixed(2)
    
    if(imc < 17){
         document.getElementById("imagem").src ="imc1.png"
     }
    if(imc >= 17 &&  18.49){
         document.getElementById("imagem").src ="imc2.png"
        }
    if(imc >= 18.50 && 24.99) {
        document.getElementById("imagem").src ="imc3.png"
        }
    if(imc >= 25 && 29.99) {
        document.getElementById("imagem").src ="imc4.png"
    }
    if(imc >= 30 && 34.99) {
        document.getElementById("imagem").src ="imc5.png"
    }
    if(imc >= 35 && 39.99) {
        document.getElementById("imagem").src ="imc6.png"
    }
if(imc > 40) {
        document.getElementById("imagem").src ="imc7.png"
}
 }
