module.exports = (sequelize, dataTypes) => {
    let alias = 'Status';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        status: {
            type: dataTypes.STRING(23),
            allowNull: false
        },
        
    };

    let config = {
        timestamps: false,
    };

    const Status = sequelize.define(alias, cols, config);


    
    Status.associate = (models) => {
        Status.hasMany(models.Destiny, {
            as: 'estado',
            foreignKey: 'status_id'
        }) 
    }

    return Status
};