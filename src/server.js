import { ApolloServer } from 'apollo-server'
import { readFileSync } from 'fs'
import { resolvers } from './resolvers/index.js'

var typeDefs = readFileSync('./src/typeDefs.graphql', 'UTF-8')

export const server = new ApolloServer({
    typeDefs,
    resolvers
})
