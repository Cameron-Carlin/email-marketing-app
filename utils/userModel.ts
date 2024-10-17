import clientPromise from './db';

export interface User {
  _id: string; // MongoDB ObjectId as a string
  email: string;
  password: string; // This will be hashed
}

// Function to create a new user
export const createUser = async (email: string, password: string): Promise<User> => {
  const db = (await clientPromise).db();
  const result = await db.collection('users').insertOne({ email, password });
  return { _id: result.insertedId.toString(), email, password }; // Return the new user
};

// Function to find a user by email
export const findUserByEmail = async (email: string): Promise<User | null> => {
  const db = (await clientPromise).db();
  return await db.collection('users').findOne({ email });
};