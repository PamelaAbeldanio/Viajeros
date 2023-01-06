module.exports = (sequelize, dataTypes) => {
    let alias = 'User_category';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        /* create_at: dataTypes.TIMESTAMP,
        updated_at: dataTypes.TIMESTAMP, */
        category: {
            type: dataTypes.STRING(20),
            allowNull: false
        },
    };

    let config = {
        timestamps: false,
        /* deleteAt: false */
    };

    const User_category = sequelize.define(alias, cols, config);


    
    User_category.associate = (models) => {
        User_category.hasMany(models.User, {
            as: 'categoriaUsuario',
            foreignKey: 'user_category_id'
        }) 
    }

    return User_category
};