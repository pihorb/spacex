const express = require('express')
const { graphqlHTTP } = require('express-graphQL')
const schema = require('./schema')
const cors = require('cors')
const app = express()

app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

const PORT = process.env.PORT || 3333

app.listen(PORT, () => `Server is running on ${PORT}`)