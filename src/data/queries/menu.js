import { GraphQLList as List } from 'graphql';
import MenuType from '../types/MenuType';

const menu = {
  type: new List(MenuType),
  resolve({ request }) {
    return request;
  },
};

export default menu;
