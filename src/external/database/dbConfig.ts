import mongoose from 'mongoose'

const DB_URI = process.env.DB_URI || 'mongodb://localhost'

const connection = mongoose.connect(DB_URI, {
  dbName: process.env.DB_NAME,
  // user: process.env.DB_USERNAME,
  // pass: process.env.DB_PASSWORD,
  useFindAndModify: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.Promise = global.Promise

export { mongoose, connection }
