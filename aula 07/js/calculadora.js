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
    
    const classificacao = tabelaimc(imc)
    console.log(classificacao)
    mostrarresultado (classificacao)
    

})

function calcularimc(peso, altura){
    let imc= (peso / altura ** 2); 
    return imc.toFixed(2);
   
    
}
function mostrarresultado(msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = msg
}

//classificar grau do imc
function tabelaimc(imc){
    const classificacao = ['chico palito', 'peso normal', 'gordo baleia', 'gordo pa krai kkkkk', 'filho da thais carla', 'thais carla level']
    if(imc >= 39.9) return classificacao[5];
    if(imc >= 34.9) return classificacao[4];
    if(imc >= 29.9) return classificacao[3];
    if(imc >= 24.9) return classificacao[2];
    if(imc >= 18.5) return classificacao[1];
    if(imc < 18.5) return classificacao[0];
    
}