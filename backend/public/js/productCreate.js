window.addEventListener ('load',function() {

    let form = document.getElementById('form');
    let btn = document.getElementById('enviar1');
    
    btn.addEventListener('click',(e) => {
        let errores = [];
        
        e.preventDefault()
        
        let campoNombre = form.nombre1;
        let campoImg = form.img; 
        let campoDetail = form.detail;


        if(campoNombre.value == '') {
            errores.push('El campo de Nombre de Destino es obligatorio.')
        } else if (campoNombre.value.length <= 5) {
            errores.push('El nombre debe tener por lo menos cinco(5) caracteres.')
        }
        
        if (!campoImg.value.includes('.jpg' || '.jpeg' || '.png' || '.gif')) {
            errores.push('La imágen debe ser formato jpg, jpeg, png o gif.')
        } 

        if(campoDetail.value == '') {
            errores.push('El campo del detalle es obligatorio.')
        } else if (campoDetail.value.length <= 20) {
            errores.push('El detalle debe tener por lo menos veinte(20) caracteres.')
        } 

        

        if(errores.length > 0) {
            let ulErrores = document.querySelector('div.errores ul');


            ulErrores.innerHTML = ''
            console.log(errores);
            ulErrores.classList.add('text-danger1')
            for(let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += '<li>' + '<i class="fas fa-exclamation-circle ">' + '</i>' + errores[i] + '</li>'
            }
        } else {
            form.submit()
        }
    })


})


