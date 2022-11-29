// imports user from models
const { User } = require('../models');
// imports signToken from auth
const { signToken } = require('../utils/auth');
// imports error from apollo server
const { AuthenticationError } = require('apollo-server-express')

const resolvers = {
    Query: {
        // gets single user data 
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                return userData;
            }
            // won't retreive data without permission
            throw new AuthenticationError('You need to log in.');
        }
    },
    Mutation: {
        // adds a user, signs token, and sends them back
        addUser: async (parent, args) => {
            // creates user using arguments
            const user = await User.create(args);
            // creates token 
            const token = signToken(user);
            // returns user and token
            return { token, user };
        },
        addBias: async (parent, args, context) => {
            // updates user using arguments
            const user = await User.findOneAndUpdate(
                { _id: context.user._id },
                {
                    $addToSet: {
                        biases: { groupName: args.groupName, idol: args.idol }
                    }
                },
                { new: true }
            );
            return user;
        },
        removeBias: async (parent, args, context) => {
            // updates user using arguments
            if (context.user) {
                // removes the selected book from the user's saved books
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { biases: { groupName: args.groupName, idol: args.idol } } },
                    { new: true }
                );
                return updatedUser;
            }
        },

        // login, sign token, and send back
        login: async (parent, { email, password }) => {
            // searches for user by email
            const user = await User.findOne({ email });
            // throws error if the email isn't associated with a user
            if (!user) {
                throw new AuthenticationError('No user found');
            }
            // checks if the password matches the user
            const correct = await user.isCorrectPassword(password);
            // throws error for wrong password
            if (!correct) {
                throw new AuthenticationError('Wrong password')
            }
            // if user and password check out, creates token
            const token = signToken(user);
            // returns user and token
            return { token, user };
        },
    },
};

module.exports = resolvers;