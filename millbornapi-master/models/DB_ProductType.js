/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DB_ProductType', {
    ProductTypeId: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ProductType: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CreatedBy: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    ModifiedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ModifiedBy: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    }
  }, {
    tableName: 'DB_ProductType',
    timestamps: false
  });
};
