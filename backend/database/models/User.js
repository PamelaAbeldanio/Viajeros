module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        user: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        user_category_id: {
            type: dataTypes.INTEGER(10),
            /* allowNull: false */
        },
        img: {
            type: dataTypes.TEXT,
            /* allowNull: false */
        },
        phone_number: {
            type: dataTypes.INTEGER(50),
            allowNull: false
        }
    };

    let config = {
        timestamps: false,
        /* deleteAt: false */
    }

    const User = sequelize.define(alias, cols, config);

    // TERMINAR ESTA PARTE
    User.associate = (models) => {
        User.belongsToMany(models.Destiny, {
            as: 'destiny',
            through: 'Destiny_user',
            foreignKey: 'user_id',
            otherKey: 'destiny_id',
            timestamps: false
        })
    }

    return User
}