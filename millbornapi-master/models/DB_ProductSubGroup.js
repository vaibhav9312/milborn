module.exports = function(sequelize, DataTypes) {
    return sequelize.define('DB_ProductSubGroup', {
      SubGroupId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      SubGroup: {
        type: DataTypes.STRING(64),
        allowNull: false
      },
      GroupId: {
        type: DataTypes.STRING(64),
        allowNull: false
      }
    }, {
      tableName: 'DB_ProductSubGroup',
      timestamps: false
    });
  };
  