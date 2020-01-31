import Sequelize, { Model } from 'sequelize';

class Enterprise extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Type, {
      foreignKey: 'type_id',
      as: 'enterprise_type',
    });
  }
}

export default Enterprise;
