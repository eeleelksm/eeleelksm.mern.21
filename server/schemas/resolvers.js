const { User, Book } = require("../models");

const resolvers = {
	Query: {
		// get a single user by username
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({ _id: context.user._id })
					.select("-__v -password")
					.populate("books");

				return userData;
			}
			// throw new AuthenticationError("Not logged in");
		},
	},
};

module.exports = resolvers;
