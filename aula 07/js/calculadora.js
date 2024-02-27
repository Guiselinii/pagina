const formulario = document.querySelector('#formulario');

console.log (formulario)
formulario.addEventListener('submit' , function(e){
    e.preventDefault();
    
    const inputpeso = e.target.querySelector("#peso")
    console.log(inputpeso)
    
   
    
    const peso = Number (inputpeso.value)
    console.log(inputpeso)
    console.log(peso)

    const inputaltura = e.target.querySelector('#altura')
    const altura = Number (inputaltura.value)
    console.log(inputaltura)
    console.log(altura)

    const imc = calcularimc(peso, altura)

    console.log(imc)

})

function calcularimc(peso, altura){
    let imc= (peso / altura ** 2); 
    return imc.toFixed(2);
}