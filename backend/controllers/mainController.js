const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const productsJson = fs.readFileSync(path.join(__dirname, '../data/productsBd.json'), 'utf-8');
const userJson = fs.readFileSync(path.join(__dirname, '../data/usersBd.json'));

let users = JSON.parse(userJson);
const products = JSON.parse(productsJson);

const db = require('../database/models');
const sequelize = db.sequelize;

const controller = {
    index: (req, res) =>{
        

        db.Destiny.findAll({raw: true, nest: true}).
            then((destinos) => {
                res.render('index', {destinos});
        })
    },
    contact: (req, res) =>{
        res.render('contact');
    },
    nosotros:(req, res) =>{
        res.render('nosotros');
    },
    cart: (req, res) =>{
        res.render('productCart');
    },
    admin: (req, res) =>{
        res.render("admin");
    },
    adminLoginCheck: (req, res) => {

        let adminCheck = {
            user: req.body.userAdmin,
            password: req.body.adminPassword
        }

        db.User.findOne({
            raw: true,
            where: {
                user: adminCheck.user
            }
        })
        .then((e) => {
            if(e.user_category_id == 1) {
                res.send('no sos admin');
            } else {
                if(bcrypt.compareSync(req.body.adminPassword, e.password)) {
                    res.redirect('adminList');
                } else {
                    res.redirect('administrador');
                }
            }
        })
        
    }
}


module.exports = controller;