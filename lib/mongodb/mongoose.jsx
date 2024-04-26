import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

let cachedDb = null

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb
  }

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  const db = await mongoose.connect(MONGODB_URI, options)

  cachedDb = db
  return db
}

export default connectToDatabase
