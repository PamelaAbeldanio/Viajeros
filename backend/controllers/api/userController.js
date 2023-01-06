const e = require('express');
const db = require('../../database/models');
const sequelize = db.sequelize;

const controller = {
    users: (req,res) => {
        db.User.findAll({raw:true, attributes: ['id', 'first_name', 'last_name', 'email', 'user']}) 
        .then(users => {
            users = users.map(user => ({
                ...user,
                detail: `/api/users/${user.id}`

            }))
            res.json({
                count: users.length,
                data: users,
                status: 200,
            })
        })
    },
    userId: (req, res) => {
        db.User.findByPk(req.params.id, {raw:true, attributes: ['id', 'first_name','last_name', 'img', 'email', 'user', 'phone_number']})
        .then(userId => {
            res.json({
                ...userId,
               img: `/img/${userId.img}` 
            })
        })
    }
}

module.exports = controller