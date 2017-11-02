import sequelize from '../sequelize';
import Menu from './Menu';

function sync(...args) {
  return sequelize.sync(...args);
}

export default { sync };
export { Menu };
