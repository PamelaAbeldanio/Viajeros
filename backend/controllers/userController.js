const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const userJson = fs.readFileSync(path.join(__dirname, '../data/usersBd.json'));
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const sequelize = db.sequelize
let users = JSON.parse(userJson);



const userController = {
    login: (req, res) => {
        res.render('login')
    },
    register: (req, res) => {
        res.render('register');
    },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        db.User.findOne({
            where: {
                email: req.body.email
            }
        })
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
                        errors: {
                            email:
                                { msg: 'El email ya se encuentra registrado' }
                        }, //resultValidation.mapped(),
                        oldData: req.body
                    });
                }
            })
            .catch((e) => {
                res.send(e);
            })
    },
    processLogin: (req, res) => {

        const resultValidation = validationResult(req);
        let usuarioALoguearse = {
            user: req.body.user,
            password: req.body.password
        };
        for (let i = 0; i < users.lenght; i++) {

            if (users[i].user == req.body.user) {
                if (bcrypt.compareSync(req.body.password, users[i].password)) {
                    usuarioALoguearse = users[i];
                    break;
                }
            }
        }
        if (resultValidation.errors.length > 0) {
            return res.render('login', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        } else {
            res.redirect('/')
        }

    },
    usersCheck: (req, res) => {

        db.User.findOne({
            raw: true,
            where: {
                user: req.body.user,
            }
        }).then((check) => {

            if (check) {
                if (bcrypt.compareSync(req.body.password, check.password)) {
                    req.session.usuariologueado = check;

                    if (req.body.remember != undefined) {
                        res.cookie('user', req.body.user,  { maxAge: 60000 }/* { max: (1000 * 60) * 2 } */)
                    }

                    return res.redirect('/perfil');


                } else {
                    res.render('login', {
                        errors: {
                            password:
                                { msg: 'Crendeciales invalidas' }
                        }, //resultValidation.mapped(),
                        oldData: req.body
                    });
                }

            } else {
                res.render('login', {
                    errors: {
                        password:
                            { msg: 'Usuario no encontrado' }
                    }, //resultValidation.mapped(),
                    oldData: req.body
                })
            }
        }).catch((e) => {
            res.send(e)
        })
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
        }).then(user => {
            res.render('perfilEdit', { user, userId })
        }).catch(e => {
            res.send(e);
        })

    },

    logout: (req, res) => {
        res.clearCookie('user')
        req.session.destroy();
        res.redirect('/')
    },
    savePerfilEdit: (req, res) => {
        let userEdited = req.params.userId 
        
        const resultValidation = validationResult(req);
        db.User.findOne({
            where: {
                id: userEdited,
            }
        }).then(user => {
            if (resultValidation.errors.length > 0) {
                return res.render('perfilEdit', {
                    user,
                    errors: resultValidation.mapped(),
                    oldData: req.body,
                    userId: userEdited
        });
        }
    
        db.User.update({
            id: parseInt(userEdited),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            user: req.body.user,
            password: req.body.password,
            category: req.body.category,
            img: req.file.filename,
            phoneNumber: req.body.phoneNumber
        },
            {
                where: { id: userEdited }
            })
            .then(res.redirect('/perfil'))
            .catch(e => {
                res.send(e);
            })
    })
}
}

module.exports = userController;