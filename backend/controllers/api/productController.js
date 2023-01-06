const e = require('express');
const db = require('../../database/models');
const sequelize = db.sequelize;

const controller = {
    destiny: (req, res) => {
        db.Destiny.findAll({
            raw: true,
            nest: true,
            attributes: ['id', 'name', 'detail', 'img'],
            include: 'categorys'
        })
            .then(destinys => {
                let internacional = 0;
                let nacional = 0;
                categorys = destinys.map(destiny => {
                    if (destiny.categorys.id == 1) {
                        nacional++
                    } else {
                        internacional++
                    }
                });
                let arrayCountCategorys = [{
                    nombre: "Nacional",
                    cantidad: nacional
                },
                {
                    nombre: "Internacional",
                    cantidad: internacional

                }]
                destinys = destinys.map(destiny => ({
                    ...destiny,
                    productDescription: `/api/products/${destiny.id}`,
                }))
                res.json({
                    count: destinys.length,
                    countByCategory:arrayCountCategorys,
                    totalCountCategory:arrayCountCategorys.length,
                    data: destinys,
                    status: 200
                })
            })

    },
    destinyId: (req, res) => {
        db.Destiny.findByPk(req.params.id, {
            raw: true, nest: true,
            include: ['transports', 'meals', 'salidas', 'categorys', 'anuncios']
        })
            .then(destinyId => {
                res.json({
                    ...destinyId,
                    img: `/img/${destinyId.img}`
                })
            })
    }
}



module.exports = controller