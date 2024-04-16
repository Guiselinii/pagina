var slideindex = 0; 

carrossel()

function carrossel(){
    var x = document.getElementsByClassName('meuslide');

    for(var i = 0; i < x.length; i++){
        x[i].style.display = 'none'
    }
    slideindex++;
    if(slideindex > x.length){
        slideindex = 1;
    }
    
    x[slideindex-1].style.display = 'block';
    setTimeout(carrossel, 2000);

    console.log(x)

}

