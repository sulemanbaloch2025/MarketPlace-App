import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import mongoose from 'mongoose';
import schema from './graphql/schema';

const app = express();
// MongoDB connection
mongoose.connect('mongodb+srv://sulemanbaloch2025:SullyBaloch8199@database1.6w03jrw.mongodb.net/?retryWrites=true&w=majority');
const db = mongoose.connection;
export { db };
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});


app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true, // Enable the GraphiQL web interface for testing
  })
);

app.listen(1000, () => {
  console.log('GraphQL server is running at http://localhost:1000/graphql');
});
