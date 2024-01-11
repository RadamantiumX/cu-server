import { GraphQLResolveInfo } from 'graphql'
import { UserInputError } from 'apollo-server'
import jwt from 'jsonwebtoken'

const User = 'Eduardo' // Esto deberia ser el MODEL de USER

const JWT_SECRET = 'SECRET_STRING_TO_GENERATE_WEB_TOKEN'

export const usersResolver = {
  Mutation: {
    login: async (root, args) => {
      const user = await User.findOne({ email: args.email }) // Buscamos por email

      if (!user || args !== '123456') {
        throw new UserInputError('wrong credentials')
      }

      const userForToken = {
        email: args.email,
        id: user._id // ID de MONGODB
      }

      return {
        value: jwt.sign(userForToken, JWT_SECRET)
      }
    }
  }
}
