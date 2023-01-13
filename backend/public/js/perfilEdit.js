window.addEventListener ('load',function() {

    let form = document.getElementById('form-edit');
    let btn = document.getElementById('enviar1');
    
    
    btn.addEventListener('click',(e) => {
        let errores = [];
        e.preventDefault()
        
        let campoNombre = form.firstName;
        let campoImg = form.img; 
        let campoEmail = form.email;


        if(campoNombre.value == '') {
            errores.push('El campo de Nombre es obligatorio.')
        } else if (campoNombre.value.length <= 2) {
            errores.push('Debe tener por lo menos dos(2) caracteres.')
        }

    
        if (!campoImg.value.includes('.jpg' || '.jpeg' || '.png' || '.gif')) {
            errores.push('La imágen debe ser formato jpg, jpeg, png o gif.')
        } 

        if(campoEmail.value == '') {
            errores.push('El campo de Email es obligatorio.')
        } else if (!campoEmail.value.includes('@' && '.com')) {
            errores.push('Debe ser un email valido.')
        }

    
        if(errores.length > 0) {
            let ulErrores = document.querySelector('div.errores ul');


            ulErrores.innerHTML = ''

            ulErrores.classList.add('text-danger2')
            for(let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += '<li>' + '<i class="fas fa-exclamation-circle ">' + '</i>' + errores[i] + '</li>'
            }
        } else {
            form.submit()
        }
    })


})

