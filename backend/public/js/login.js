/* const db = require('../../database/models');
const sequelize = db.sequelize
 */
window.addEventListener ('load', () => {
    let form = document.getElementById('form')

    form.btn.addEventListener('click',(e) => {
        let errores = [];
        e.preventDefault()
       
        let campoUsuario = form.user;
        let campoPassword = form.password;

        
        if(campoUsuario.value == '') {
            errores.push('El campo de Usuario es obligatorio.')
            
        } 
        
        if(campoPassword.value == '') {
            errores.push('El campo de la Constraseña es obligatorio.')
        } else if (campoPassword.value.length < 8) {
            errores.push('Debe tener por lo menos ocho(8) caracteres.')
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