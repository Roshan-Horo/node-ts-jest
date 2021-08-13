import {MongoClient} from 'mongodb'

// connection Url
const url = 'mongodb://localhost:27017'

const client = new MongoClient(url)

let db: any;

(async () => {
    try {
       await client.connect() 
       console.log('Connected to DB server - localhost')
       db = client.db('testJest')
       console.log("db: ", db)
    } catch (error) {
       console.log('Error: ', error) 
       process.exit(1)
    }
  
})()

export default async function getUser(username: string) {
    const result = await client.db('testJest').collection('user').findOne({ "username": username})
    return result
}

export async function createUser(username: string, password: string) {
    const {insertedId} = await client. db('testJest').collection('user').insertOne({ "username": username, "password": password})
    return insertedId
}

