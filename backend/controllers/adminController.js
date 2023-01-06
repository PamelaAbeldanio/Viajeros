const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const productsJson = fs.readFileSync(path.join(__dirname, '../data/productsBd.json'));
const userJson = fs.readFileSync(path.join(__dirname, '../data/usersBd.json'));

let users = JSON.parse(userJson);
let products = JSON.parse(productsJson);

const db = require('../database/models');
const sequelize = db.sequelize;

const controller = {

    deleteUser: (req, res) => {
            let user = req.params.userId

            db.User.destroy({
                where: {
                    id: user,
                }
            }).then(() => {
                return res.redirect('/userList');
            })

    },

    saveUserEdit: (req, res) => {
        //creamos nuevamente el objeto para poder modificar el registro del usuario
        let userEdited = req.params.userId

        db.User.update({
            id: userEdited,
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            user: req.body.user,
            //password: bcrypt.hashSync(req.body.password, 10), //ver como guardar la contra
            user_category_id: req.body.category,
            img: req.file.filename,
            phone_number: req.body.phoneNumber
        }, {
            where: { id: userEdited }
        }).then(res.redirect('/userList'))
            .catch(e => {
                res.send(e);
            });
    },

    editUser: (req, res) => {
        let userId = req.params.userId

        db.User.findByPk(userId)
            .then(user => {
                res.render('userEdit', { user, userId });

            })

    },

    userList: (req, res) => {

        db.User.findAll()
            .then(users => {
                res.render('userList', { users });
            })
    },

    saveEdit: (req, res) => {
        let destinyId = req.params.id

        /* ---------------------VALIDACION PENDIENTE BACKEND-------------------- */
       const resultValidation = validationResult(req);
        db.Destiny.findOne({
        where: {
            id: destinyId,
        }
    }).then(product=>{
        if (resultValidation.errors.length > 0) {
            return res.render('edit', {
                product,
                errors: resultValidation.mapped(),
                oldData: req.body,
                idProduct: destinyId
            });
        }
   
            db.Destiny.update({
                id: parseInt(destinyId),
                name: req.body.newName,
                date: req.body.newDate,
                price: req.body.newPrice,
                detail: req.body.newDetail,
                destiny_category_id: req.body.category,
                img: req.file.filename,
                status_id: req.body.status,
                extras_id: req.body.newExtras,
                transport_id: req.body.transport,
                group_id: req.body.group,
                meals_id: req.body.meals
            }, {
                where: { id: destinyId }
            }).then(res.redirect('/adminList'))
                .catch(e => {
                    res.send(e);
                })
          
            })
        

},
    adminList: (req, res) => {
    db.Destiny.findAll()
    .then(destinos => res.render("adminList", { destinos }));

    //res.render("adminList", {products});
},
add: (req, res) => {
    res.render("productAdd");
},
    create: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('productAdd', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        db.Destiny.create({
            name: req.body.name,
            date: req.body.date,
            price: req.body.insure,
            detail: req.body.detail,
            destiny_category_id: req.body.category,
            img: req.file.filename,
            status_id: req.body.status,
            extras: req.body.extras,
            transport_id: req.body.transport,
            group_id: req.body.group,
            meals_id: req.body.meals
        }).then(() => {
            res.redirect('/adminList');
        }).catch(e => {
            res.send(e)
        })


    },
        comments: (req, res) => {
            res.render("comments");
        },
            productEdit: (req, res) => {
                let idProduct = req.params.id;

                db.Destiny.findOne({
                    where: {
                        id: idProduct,
                    }
                }).then(product => {
                    res.render("edit", { product, idProduct });
                }).catch(e => {
                    res.send(e);
                })

            },
                delete: (req, res) => {

                    let destiny = req.params.id

                    db.Destiny.destroy({
                        where: {
                            id: destiny,
                        }
                    }).then(() => {
                        return res.redirect('/adminList');
                    })

                }
}


module.exports = controller;

