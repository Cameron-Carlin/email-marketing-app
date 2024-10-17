import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Make sure to set this environment variable
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so we don’t create a new client on every request
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, create a new client for every request
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

