module.exports = (sequelize, dataTypes) => {
    let alias = 'Destiny_user';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
      
        user_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        destiny_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        }
    };

    let config = {
        timestamps: false,
      
    };

    const Destiny_user = sequelize.define(alias, cols, config);

    return Destiny_user
};