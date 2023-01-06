/* const path = require('path');
const fs = require('fs');
const userJson = fs.readFileSync(path.join(__dirname, '../data/usersBd.json'));
let users = JSON.parse(userJson); */

const db = require('../database/models');
const sequelize = db.sequelize;

function userLoggedMiddleware (req, res, next) {
    /* res.locals.isLogged = false; */
    /* res.locals.isAdmin = false;  */
    
    
    let userInCookie = req.cookies.user;
    
/*     let userFromCookie =  */
    db.User.findAll({
        raw: true,
    })
        .then((usuarios) => { 
            if(usuarios) { 
            /* req.session.usuariologueado = usuarios
            console.log( req.session.usuariologueado) */
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