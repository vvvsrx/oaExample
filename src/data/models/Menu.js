import DataType from 'sequelize';
import Model from '../sequelize';

const Menu = Model.define('menu', {
  id: {
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataType.STRING(100),
    allowNull: false,
  },
  authid: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  depth: {
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  parent: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  order: {
    type: DataType.INTEGER,
    allowNull: false,
  },
});

export default Menu;
