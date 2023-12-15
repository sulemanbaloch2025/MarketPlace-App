import { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLFloat } from 'graphql';
import { GraphQLInputObjectType, GraphQLList } from 'graphql';
import Item from '../models/Item';
import { db } from '../server'; // Adjust the relative path to correctly locate server.js

async function fetchAllItemsFromMongoDB() {
  try {
    const collection = db.collection('items'); // Replace 'items' with your collection name
    const items = await collection.find({}).toArray();
    return items;
  } catch (err) {
    console.error('Error fetching items from MongoDB:', err);
    return [];
  }
}


// Define a type for the item
const ItemType = new GraphQLObjectType({
  name: 'Item',
  fields: {
    id: { type: GraphQLString },
    price: { type: GraphQLFloat },
    seller: { type: GraphQLString },
    description: { type: GraphQLString },
    size: { type: GraphQLFloat },
    color: { type: GraphQLString },
    condition: { type: GraphQLString },
    for: { type: GraphQLFloat },
    category: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    
  },
  
});
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => 'Hello, GraphQL!',
    },
    allItems: {
      type: new GraphQLList(ItemType),
      resolve: async () => {
        const allItems = await fetchAllItemsFromMongoDB();
        return allItems;
      }
    }
  
    
  },
});

const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    createItem: {
      type: ItemType,
      args: {
        input: {
          type: new GraphQLInputObjectType({
            name: 'ItemInput',
            fields: {
              price: { type: GraphQLFloat },
              seller: { type: GraphQLString },
              description: { type: GraphQLString },
              size: { type: GraphQLFloat },
              color: { type: GraphQLString },
              condition: { type: GraphQLString },
              for: { type: GraphQLFloat },
              category: { type: GraphQLString },
              imageUrl: { type: GraphQLString },

            },
          }),
        },
      },
      resolve: async (_, args) => {
        try {
          // Create a new item in the database
          const newItem = new Item({
            price: args.input.price,
            seller: args.input.seller,
            description: args.input.description,
            size: args.input.size,
            color: args.input.color,
            condition: args.input.condition,
            for: args.input.for,
            category: args.input.category,
            imageUrl: args.input.imageUrl
          });

          // Save the new item to the database
          await newItem.save();

          // Return the created item
          return newItem;
        } catch (error) {
          throw new Error('Error creating item: ' + error);
        }
      },
    },
  },
});



const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation, // Add the mutation type to the schema
});

export default schema;
