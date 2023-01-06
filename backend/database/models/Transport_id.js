module.exports = (sequelize, dataTypes) => {
    let alias = 'Transport_id';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        /* create_at: dataTypes.TIMESTAMP,
        updated_at: dataTypes.TIMESTAMP, */
        transport: {
            type: dataTypes.STRING(20),
            allowNull: false
        },
    };

    let config = {
        timestamps: false,
        /* deleteAt: false */
    };

    const Transport_id = sequelize.define(alias, cols, config);


    
    Transport_id.associate = (models) => {
        Transport_id.hasMany(models.Destiny, {
            as: 'destinos',
            foreignKey: 'transport_id'
        }) 
    }

    return Transport_id
};