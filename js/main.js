var boton = document.getElementById('boton');
var checks = document.querySelectorAll('.valores');
var wrap = document.querySelector('.wrap');
var A = document.getElementById('seccionA');
var B = document.getElementById('seccionB');
var C = document.getElementById('seccionC');
var proximamente = document.querySelector('.contenedor-proximamente');
var grado = document.querySelector('.grado')
var final = document.querySelector('.final')




boton.addEventListener('click', (event) =>{
    event.preventDefault();
    checks.forEach( (e) =>{
        if(e.checked === true){
            localStorage.setItem('info', e.value)
        }
        
    });
     
    if(informacion === 'seccion1'){
        wrap.style.display = 'none';
        proximamente.style.display = 'none';
       
        
        final.style.display = 'none';
        A.style.display = 'block'
    
    }
    if(informacion === 'seccion2'){
        wrap.style.display = 'none';
        proximamente.style.display = 'none';
        
        final.style.display = 'none';
        B.style.display = 'block'

    }
    if(informacion === 'seccion3'){
        wrap.style.display = 'none';
        proximamente.style.display = 'none';
        
        final.style.display = 'none';
        C.style.display = 'block'

    }
    
    
    
});


const informacion = localStorage.getItem('info');


// sistema de carga 
window.addEventListener('load', () => {
    const contenedor = document.querySelector('.contenedor')
    contenedor.style.opacity = 0
    contenedor.style.visibility = 'hidden'
});
        
        