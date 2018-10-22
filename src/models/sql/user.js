import Sequelize from 'sequelize';
import { sequelize } from '../../clients/sequelize';

export const User = sequelize.define('user', {
  uuid: { type: Sequelize.STRING, primaryKey: true },
  password_hash: Sequelize.STRING,
  email: Sequelize.STRING,
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
}, {
  timestamps: false,
});
