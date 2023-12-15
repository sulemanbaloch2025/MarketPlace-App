Shopping App Backend and Database Setup
Overview
This README document provides an overview of the steps taken to set up the backend and front end for a shopping app using Express, GraphQL, MongoDB and React native.

Backend Setup: The goal of this backend is to allow users to retrieve product information from a database and display it on a React Native app.
Dependencies Installation
To begin with, the following dependencies were installed using npm:

npm install express express-graphql graphql npm install --save-dev typescript ts-node @types/node @types/express @types/graphql
These packages are essential for building a GraphQL server with Express and TypeScript.
GraphQL Schema
Schema Design
The GraphQL schema was designed to accommodate the following product properties:
price
seller
description
size
color
condition
for
category
image
These properties were incorporated into the GraphQL schema to represent the structure of the data that the server will handle.
MongoDB Setup
Mongoose Installation
To establish a connection to a MongoDB database and define the data model, Mongoose was installed:
npm install mongoose
Mongoose is an MongoDB object modeling tool that simplifies interactions with the database.
Database Connection
A connection to the MongoDB database was established using a connection string. This connection allows the server to interact with the database.
Data Model
A Mongoose data model was created to represent the schema for the MongoDB collection. The properties of the data model mirror the fields in the GraphQL schema:


// Example Mongoose data model for an item
const itemSchema = new mongoose.Schema({
  price: { type: Number, required: true },
  seller: { type: String, required: true },
  description: { type: String, default: '' },
  size: { type: String, default: '' },
  color: { type: String, default: '' },
  condition: { type: String, default: '' },
  for: { type: String, default: '' },
  category: { type: String, default: '' },
  image: { type: String } // Example for an image field
});

const ItemModel = mongoose.model('Item', itemSchema);

Backend Functionality
GraphQL Resolvers
To enable the GraphQL server to interact with the MongoDB database, resolver functions were created. These resolver functions handle GraphQL queries and mutations, allowing for data retrieval and modification.
A mutation was created to add new items to the database. The resolver function takes input arguments, creates a new item using Mongoose, and saves it to the database.
A query was created to retrieve data from the database. This query allows the client to request specific information about products.
With the setup of the MongoDB database, GraphQL schema, and resolver functions, the backend is now capable of handling requests from a React Native app. This completes the backend setup for the shopping app.
Feel free to further customize and extend the backend to meet specific requirements and add additional features as needed for your application.

In the front-end development of our project, we utilized Expo Router to create a robust React Native application. This document outlines the key components and strategies employed to seamlessly connect our front-end with the backend, fetch data, and render it effectively.
Data Retrieval with Axios
To establish communication with our backend server, we leveraged the Axios library. Axios allows us to make HTTP requests to our server, which is crucial for interacting with our GraphQL-based API. Specifically, we employed POST requests to send queries to our server's URL.
GraphQL Integration
Given that our project utilizes GraphQL as the query language for our API, we ensured that our Axios POST requests included the necessary query to retrieve all items from the database. This query was designed to fetch specific fields from the database, providing only the data we needed for our front-end.
Home Page
The home page serves as the primary interface for our application. Here, we integrated the data retrieval process from our server. We employed various React Native components to enhance the user experience:
Text: We used the Text component to display greeting text and other textual information to the user.
SafeAreaView: Ensuring a consistent user interface across different devices and screen sizes was vital. The SafeAreaView component helped us achieve this by handling safe areas and margins appropriately.
FlatList: For efficiently displaying lists of items, we utilized the FlatList component. It not only optimized performance but also provided a seamless scrolling experience.
Item Component
To create a modular and reusable design, we developed a separate component called "Item" to display individual items and their details. This approach promotes code maintainability and reusability.
State Management with Hooks
We employed the useState and useEffect hooks to manage the state of our application effectively. Specifically, we used useState to maintain the state of retrieved data from the database. useEffect was utilized to trigger data retrieval and updates when needed, ensuring that our component re-renders appropriately.
Image Handling with Amazon S3 Buckets
For handling and displaying images associated with each item, we adopted a secure and scalable approach. We stored images in Amazon S3 buckets, which provide reliable and scalable storage solutions. To enable access to these images from anywhere, we implemented appropriate bucket policies, avoiding permissions errors.
Conclusion
By adopting these strategies and components, we successfully built a front-end application that seamlessly communicates with our backend, efficiently retrieves and displays data, and provides an engaging user experience
