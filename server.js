const express = require('express')
const { graphqlHTTP } = require('express-graphQL')
const graphql = require('graphql')
const schema = require('./schema')

const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

const PORT = process.env.PORT || 3333

app.listen(PORT, () => `Server is running on ${PORT}`)