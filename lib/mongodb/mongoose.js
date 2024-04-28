import mongoose from 'mongoose'

let isConnected = false

export const connectToDB = async () => {
  mongoose.set('strictQuery', true)

  if (isConnected) {
    console.log('MongoDB is already connected')
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: 'cornhub',
      useNewUrlParser: true,
    })

    isConnected = true

    console.log('MongoDB is connected')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    throw error
  }
}
