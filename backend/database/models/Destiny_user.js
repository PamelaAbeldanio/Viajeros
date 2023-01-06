module.exports = (sequelize, dataTypes) => {
    let alias = 'Destiny_user';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        /* create_at: dataTypes.TIMESTAMP,
        updated_at: dataTypes.TIMESTAMP, */
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
        /* deleteAt: false */
    };

    const Destiny_user = sequelize.define(alias, cols, config);


    // TERMINAR ESTA PARTE
    /* Destiny_user.associate = (models) => {
        Destiny_user.belongsTo // hay que chequear esto
    } */

    return Destiny_user
};