module.exports = (sequelize, dataTypes) => {
    let alias = 'Meals_id';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        meals: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
    };

    let config = {
        timestamps: false,
  
    };

    const Meals_id = sequelize.define(alias, cols, config);


    
    Meals_id.associate = (models) => {
        Meals_id.hasMany(models.Destiny, {
            as: 'comidas',
            foreignKey: 'meals_id'
        }) 
    }

    return Meals_id
};