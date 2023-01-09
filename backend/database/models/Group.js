module.exports = (sequelize, dataTypes) => {
    let alias = 'Group';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        
        group: {
            type: dataTypes.STRING(20),

        }};

    let config = {
        timestamps: false,
        
    };

    const Group = sequelize.define(alias, cols, config);


 
    Group.associate = (models) => {
        Group.hasMany(models.Destiny, {
            as: 'destiny_group',
            foreignKey: 'group_id'
        }) 
    }

    return Group
};