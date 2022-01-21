const express = require("express");
const path = require("path");
// import Apollo Server
const { ApolloServer } = require("apollo-server-express");

// import typeDefs and resolvers
const { typeDefs, resolvers } = require("apollo-server-express");
const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// create a new Apollo server and pass in schema data
const startServer = async () => {
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		// context: authMiddleware
	});
};

// start Apollo server
await server.start();

// integrate our Apollo server with the Express application as middlewaaare
server.applyMiddleware({ app });

// log where we go to test our GQL API
console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);

// Initialize the Apollo server
startServer();

db.once("open", () => {
	app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
