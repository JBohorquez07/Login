// Variables
const inputEmail = document.querySelector('#email');
const inputPass = document.querySelector('#password');



// EventListener
inputEmail.addEventListener('blur', validaCorreo);
inputPass.addEventListener('blur', validaPass);



//Funciones
function validaCorreo(){
     const caracteres = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (this.value == '' || caracteres.test(this.value) == false ) {
        // Agrego color al border bottom del input y al icono
            this.style.borderBottomColor = 'red';
            const icon = this.parentElement.children[0].id;
            document.getElementById(icon).style.color = 'red';

        const newSpan = document.createElement('span')
              newSpan.className = 'helper-text icon-attention';
              newSpan.textContent = 'Ingrese un correo válido';
              newSpan.marginLeft = '20px;'
              newSpan.style.color = 'red';

        // Obtengo el elemento actual a reemplazar
         const elOld =  this.parentElement.children[3];
         // Obtengo el elemento padre que contiene el elmeneto actual a reemplazar
         const elParent = this.parentElement;
        // Reemplazamos el elemento nuevo con el elemento viejo
         elParent.replaceChild(newSpan, elOld);

    } else{
        // Agrego color al border bottom del input y al icono
            this.style.borderBottomColor = 'green';
            const icon = this.parentElement.children[0].id;
            document.getElementById(icon).style.color = 'green';

        const newSpan = document.createElement('span')
              newSpan.id = 'vacio'

        // Obtengo el elemento actual a reemplazar
         const elOld =  this.parentElement.children[3];
         // Obtengo el elemento padre que contiene el elmeneto actual a reemplazar
         const elParent = this.parentElement;
        // Reemplazamos el elemento nuevo con el elemento viejo
         elParent.replaceChild(newSpan, elOld);

    }
}
function validaPass(){

    if (this.value == '') {
        
        // Agrego color al border bottom del input y al icono
            this.style.borderBottomColor = 'red';
            const icon = this.parentElement.children[0].id;
            document.getElementById(icon).style.color = 'red';

        const newSpan = document.createElement('span')
              newSpan.className = 'helper-text icon-attention';
              newSpan.textContent = 'Ingrese una contraseña válida';
              newSpan.marginLeft = '20px;'
              newSpan.style.color = 'red';

        // Obtengo el elemento actual a reemplazar
         const elOld =  this.parentElement.children[3];
         // Obtengo el elemento padre que contiene el elmeneto actual a reemplazar
         const elParent = this.parentElement;
        // Reemplazamos el elemento nuevo con el elemento viejo
         elParent.replaceChild(newSpan, elOld);

    } else {
        console.log()
        // Agrego color al border bottom del input y al icono
            this.style.borderBottomColor = 'green';
            const icon = this.parentElement.children[0].id;
            document.getElementById(icon).style.color = 'green';

        const newSpan = document.createElement('span')
              newSpan.id = 'vacio'

        // Obtengo el elemento actual a reemplazar
         const elOld =  this.parentElement.children[3];
         // Obtengo el elemento padre que contiene el elmeneto actual a reemplazar
         const elParent = this.parentElement;
        // Reemplazamos el elemento nuevo con el elemento viejo
         elParent.replaceChild(newSpan, elOld);

    }
}


