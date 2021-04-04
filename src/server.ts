import 'reflect-metadata'
import '@config/envConfig'
import { app } from './app'
import { connection } from '@config/dbConfig'

const port = process.env.PORT || 5000

connection
  .then(() => {
    console.log('Database connected')
  })
  .catch(err => console.log('Error connecting to database'))

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})