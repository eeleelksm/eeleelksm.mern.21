// import the gql tagged template function
const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Query {
		books: [Book]
	}

	type Book {
		bookId: ID
		authors: [String]
		description: String
		title: String
	}
`;

module.exports = typeDefs;
