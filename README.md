# Shopping App Backend and Database Setup

## Overview

This README document provides an overview of the steps taken to set up the backend and front end for a shopping app using Express, GraphQL, MongoDB, and React Native.

### Backend Setup

The goal of this backend is to allow users to retrieve product information from a database and display it on a React Native app.

#### Dependencies Installation

To begin with, the following dependencies were installed using npm:

npm install express express-graphql graphql
npm install --save-dev typescript ts-node @types/node @types/express @types/graphql


These packages are essential for building a GraphQL server with Express and TypeScript.

#### GraphQL Schema

##### Schema Design

The GraphQL schema was designed to accommodate the following product properties:

- Price
- Seller
- Description
- Size
- Color
- Condition
- For
- Category
- Image

These properties were incorporated into the GraphQL schema to represent the structure of the data that the server will handle.

### MongoDB Setup

#### Mongoose Installation

To establish a connection to a MongoDB database and define the data model, Mongoose was installed:

npm install mongoose

Mongoose is a MongoDB object modeling tool that simplifies interactions with the database.

#### Database Connection

A connection to the MongoDB database was established using a connection string. This connection allows the server to interact with the database.

#### Data Model

A Mongoose data model was created to represent the schema for the MongoDB collection. The properties of the data model mirror the fields in the GraphQL schema:

```
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
```

const ItemModel = mongoose.model('Item', itemSchema); 




 # Shopping App Backend and Frontend Integration

## Backend Functionality

### GraphQL Resolvers
- **Purpose**: Enable GraphQL server to interact with MongoDB.
- **Resolvers**:
  - **Mutation**: Add new items to the database.
    - *Process*: Takes arguments, creates items via Mongoose, saves to DB.
  - **Query**: Retrieve data from the database.
    - *Function*: Allows client to request specific product information.
- **Integration**: Complete setup with MongoDB, GraphQL schema, and resolvers.
- **Extensibility**: Customize and extend as needed for specific application requirements.

## Frontend Development

### Expo Router and React Native
- **Goal**: Seamlessly connect frontend with backend, manage data retrieval and rendering.

### Data Retrieval with Axios
- **Function**: Make HTTP requests to backend server using Axios.
- **GraphQL Integration**: POST requests with GraphQL queries to fetch items.

### Home Page
- **Components**:
  - **Text**: Display greetings and textual information.
  - **SafeAreaView**: Handle UI consistency across devices.
  - **FlatList**: Display lists of items efficiently.

### Item Component
- **Purpose**: Modular and reusable design for displaying items.
- **Advantages**: Enhances code maintainability and reusability.

### State Management with Hooks
- **Hooks Used**:
  - **useState**: Manage state of retrieved data.
  - **useEffect**: Trigger data retrieval and updates.

### Image Handling with Amazon S3 Buckets
- **Approach**: Store and manage images in Amazon S3 buckets.
- **Benefits**: Secure, scalable, and reliable image storage.

## Conclusion
- **Summary**: A front-end application that effectively communicates with the backend, efficiently retrieves and displays data, and provides an engaging user experience.
