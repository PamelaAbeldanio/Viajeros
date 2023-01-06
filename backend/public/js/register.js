window.addEventListener ('load',function() {

    let form = document.getElementById('form')
    
    
    form.btn.addEventListener('click',(e) => {
        let errores = [];
        e.preventDefault()
        
        let campoNombre = form.nombre;
        let campoApellido = form.apellido;
        let campoImg = form.img; 
        let campoEmail = form.email;
        let campoPassword = form.password;


        if(campoNombre.value == '') {
            errores.push('El campo de Nombre es obligatorio.')
        } else if (campoNombre.value.length <= 2) {
            errores.push('Debe tener por lo menos dos(2) caracteres.')
        }

        if(campoApellido.value == '') {
            errores.push('El campo de Apellido es obligatorio.')
        } else if (campoApellido.value.length <= 2) {
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
        
        if(campoPassword.value == '') {
            errores.push('El campo de la Constraseña es obligatorio.')
        } else if (campoPassword.value.length < 8) {
            errores.push('La contraseña debe tener por lo menos ocho(8) caracteres.')
        } 

        if(errores.length > 0) {
            let ulErrores = document.querySelector('div.errores ul');


            ulErrores.innerHTML = ''

            ulErrores.classList.add('text-danger1')
            for(let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += '<li>' + '<i class="fas fa-exclamation-circle ">' + '</i>' + errores[i] + '</li>'
            }
        } else {
            form.submit()
        }
    })


})


