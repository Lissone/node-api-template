import 'reflect-metadata'
import 'src/external/envConfig'

import { app } from './app'
import { connection } from './database/dbConfig'

const port = process.env.PORT || 5000

connection
  .then(() => {
    console.log('Database connected')
  })
  .catch(err => console.log('Error connecting to database:', err))

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
