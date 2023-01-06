const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator');
const userJson = fs.readFileSync(path.join(__dirname, '../data/usersBd.json'));
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const sequelize = db.sequelize
let users = JSON.parse(userJson);



const userController = {
    login: (req, res) =>{
        res.render('login')
    },
    register: (req, res) =>{
        res.render('register');
    },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);
        
        if(resultValidation.errors.length > 0 ) { 
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        db.User.findOne({
            where: {
                email: req.body.email
            }})
        .then((respuesta) => {
            if (!respuesta) {
                db.User.create({
                    first_name: req.body.nombre,
                    last_name: req.body.apellido,
                    user: req.body.user,
                    img: req.file.filename,
                    birth: req.body.fechaNacimiento,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    phone_number: req.body.tel,
                    user_category_id: 1,
                }).then(() => {
                        res.redirect('login');
                }).catch((e) => {
                    res.send(e);
                })        
            } else {
                res.render('register', {
                    errors: {email:
                        { msg: 'El email ya se encuentra registrado' }
                    }, //resultValidation.mapped(),
                    oldData: req.body
                });
            }
        })
        .catch((e) => {
            res.send(e);
        })
        
        /* let newUser = {
            id: users.length + 1,
            firstName: req.body.nombre,
            lastName: req.body.apellido,
            user: req.body.user,
            birth: req.body.fechaNacimiento,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            phoneNumber: req.body.tel
        } */
        
       /*  if(resultValidation.errors.length > 0 ) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        } else {
            users.push(newUser);
            let usersJSON = JSON.stringify(users, null, ' ');
            fs.writeFileSync(path.join(__dirname,'../data/usersBd.json'), usersJSON);
            res.redirect('login')
        } */
    },
    processLogin: (req, res) => {

       const resultValidation = validationResult(req);
            //console.log(users);
            let usuarioALoguearse = {
                user: req.body.user,
                password: req.body.password
            };
                for (let i = 0; i < users.lenght; i++) {
                    
                    if(users[i].user == req.body.user) {
                        if(bcrypt.compareSync(req.body.password, users[i].password)) {
                            usuarioALoguearse = users[i];
                            break;
                        }
                    }
                }
                //console.log(usuarioALoguearse);
                if(resultValidation.errors.length > 0 ) {
                    return res.render('login', {
                        errors: resultValidation.mapped(),
                        oldData: req.body
                    });
                } else {
                    res.redirect('/')
                }

                /* let errors = validationResult(req);

                if(errors.isEmpty()) {
                    const usersJson = fs.readFileSync(path.join(__dirname, '../data/usersBd.json'), 'utf-8');

                    const users = JSON.parse(usersJson);

                    for (let i = 0; i < users.lenght; i++) {
                        if(users[i].user == req.body.user) {
                            if(bcrypt.compareSync(req.body.password, users[i].password)) {
                                usuarioALoguearse = users[i];
                                break;
                            }
                        }
                    }

                    if(usuarioALoguearse == undefined) {
                        return res.render('login', {errors: [
                            {msg: 'Credenciales invalidas'}
                        ]})
                    }

                    req.session.usuariologueado = usuarioALoguearse

                } else {
                    return res.render('login', {errors: errors.errors})
                }
 */


    },
    usersCheck: (req, res) => {

        /* const resultValidation = validationResult(req); */

        /* const usersJson = fs.readFileSync(path.join(__dirname, '../data/usersBd.json'), 'utf-8');

        const users = JSON.parse(usersJson);*/
        db.User.findOne({
            raw: true,
            where: {
                user: req.body.user,
            }
        }).then((check) => {
            
            if(check) {
                if(bcrypt.compareSync(req.body.password, check.password)) {
                    req.session.usuariologueado = check;
                    
                    if(req.body.remember) {
                        res.cookie('user', req.body.user, {max: (1000 * 60) * 2 })
                    }
                    
                    return res.redirect('/perfil');
    
                    
                } else {
                    res.render('login', {
                        errors: {password:
                            { msg: 'Crendeciales invalidas' }
                        }, //resultValidation.mapped(),
                        oldData: req.body
                    });
                }

            } else {
                res.render('login', {
                    errors: {password:
                        { msg: 'Usuario no encontrado' }
                    }, //resultValidation.mapped(),
                    oldData: req.body
                })
            }
        }).catch((e) => {
            res.send(e)
        })
         /* else {

        let userCheck = {
            user: req.body.user,
            password: req.body.password
        }
        
        let check = users.find(elemento => elemento.user == userCheck.user);
        
            res.render('login', {
                errors: resultValidation.mapped(),
                oldData: req.body
            }); */
    },
    perfil: (req, res) => {
         res.render('perfil', {
            user: req.session.usuariologueado
        }); 
    },
    perfilEdit: (req, res) => {
        let userId = req.params.userId
        
        db.User.findOne({
            where: {
                id: userId,
            }
        }).then( user => {
            res.render('perfilEdit', { user, userId })
        }).catch(e => {
            res.send(e);
        })

    },
    
    logout: (req, res) => {
        res.clearCookie('user')
        req.session.destroy();
        /* console.log(req.session); */
        res.redirect('/')
    },
    savePerfilEdit: (req, res) => {

        let userEdited = req.params.userId
      /*  const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('perfilEdit', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }*/
        db.User.update({
            id: parseInt(userEdited),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birth: req.body.birth,
            email: req.body.email,
            user: req.body.user,
            password: req.body.password, //ver como guardar la contra
            category: req.body.category,
            img: req.file.filename,
            phoneNumber: req.body.phoneNumber
        }, {
            where: {id: userEdited}
        }).then(res.redirect('/perfil'))
        .catch(e => {
            res.send(e);
        });





        /* let userEdited = {
            
        } */
        
        //buscamos el usuario en la lista de usuarios por la ID
        // let searchUser = users.find(user => user.id == userEdited.id)
        //buscamos el indice del usuario en la lista
        // let index = users.indexOf(searchUser);
        //actualizamos la informacion del usuario
        // users[index] = userEdited;
        //convertimos el array de usuarios en JSON
        // let userJson = JSON.stringify(users, null, ' ');
        //guardamos la informacion en formato JSON en la base de datos de usuarios - usersBd.json
        // fs.writeFileSync(path.join(__dirname,'../data/usersBd.json'),  userJson,);
        //redirigimos el navegador a la lista de usuarios
        
    }
}

module.exports = userController;