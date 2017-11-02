import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLInt as IntType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const MenuType = new ObjectType({
  name: 'menu',
  fields: {
    id: { type: new NonNull(ID) },
    name: { type: StringType },
    authid: { type: IntType },
    depth: { type: IntType },
    parent: { type: IntType },
    order: { type: IntType },
  },
});

export default MenuType;
