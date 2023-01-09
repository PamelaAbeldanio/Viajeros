
module.exports = (sequelize, dataTypes) => {
    let alias = 'Destiny';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
       
        name: {
            type: dataTypes.STRING(200),
            
        },
        date: {
            type: dataTypes.DATE,
           
        },
        price: {
            type: dataTypes.DECIMAL(10,0),
            
        },
        detail: {
            type: dataTypes.TEXT,
            
        },
        destiny_category_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            
        },
        img: {
            type: dataTypes.TEXT,
            
        },
        status_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            
        },
        extras: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            
        },
        transport_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            
        },
        group_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            
        },
        meals_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            
        }
    };

    let config = {
        timestamps: false,
        tableName: 'destiny'
      
    };

    const Destiny = sequelize.define(alias, cols, config);


    
    Destiny.associate = (models) => {
        Destiny.belongsToMany(models.User, {
            as: 'users',
            through: 'Destiny_user',
            foreignKey: 'destiny_id',
            otherKey: 'user_id',
            timestamps: false
        });

        Destiny.belongsTo(models.Transport_id, {
            as: 'transports',
            foreignKey: 'transport_id'
        });

        Destiny.belongsTo(models.Destiny_category, {
            as: 'categorys',
            foreignKey: 'destiny_category_id'
        });

        Destiny.belongsTo(models.Group,{
            as: 'salidas',
            foreignKey: 'group_id'
        });

        Destiny.belongsTo(models.Meals_id, {
            as:'meals',
            foreignKey: 'meals_id'
        });

        Destiny.belongsTo(models.Status, {
            as:'anuncios',
            foreignKey: 'status_id'
        })

    }

    

    return Destiny
};

