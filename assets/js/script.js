cantidad = document.querySelector('#cantidad');
color = document.querySelector('#color');  
precio = document.querySelector('#precio');

preciototal = document.querySelector('#preciototal');
cantidadtotal = document.querySelector('#cantidadtotal');
colorfinal = document.querySelector('.circulocolor');

preciototal.innerHTML = Number(cantidad.value) * Number(precio.innerHTML);
cantidadtotal.innerHTML = cantidad.value; 

colorfinal.style.backgroundColor = color.value;