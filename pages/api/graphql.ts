import { createGraphQLHandler } from 'next-graphql-server';
import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: () => ({
      hello: {
        type: GraphQLString,
        resolve: () => "world",
      },
    }),
  }),
});

const handler = createGraphQLHandler(schema) 
export default handler;
