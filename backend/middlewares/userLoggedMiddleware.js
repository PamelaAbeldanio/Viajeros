
const db = require('../database/models');
const sequelize = db.sequelize;

function userLoggedMiddleware (req, res, next) {

    let userInCookie = req.cookies.user;
    
    db.User.findAll({
        raw: true,
    })
        .then((usuarios) => { 
            if(usuarios) { 
            let usuarioEncontrado = usuarios.filter( e => e.user == userInCookie)
           console.log(usuarioEncontrado);
        }
    
        if (req.session && req.session.usuariologueado) {
            res.locals.isLogged = true;
            res.locals.usuariologueado = req.session.usuariologueado;
        }
        
        next()});

}

 module.exports = userLoggedMiddleware; 