import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        email: Sequelize.STRING,
        password: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  checkPassword(password) {
    return password === this.password;
  }
}

export default User;
