import jwt from 'jsonwebtoken';
import { User, createUser, findUserByEmail } from './userModel';
import bcrypt from 'bcrypt';

// Secret keys for signing tokens
const SECRET_KEY = process.env.JWT_SECRET || 'your_jwt_secret_key';
const REFRESH_SECRET_KEY = process.env.JWT_REFRESH_SECRET || 'your_refresh_secret_key';

// Function to generate JWT token for a user
export const generateToken = (userId: string): string => {
  return jwt.sign({ id: userId }, SECRET_KEY, { expiresIn: '15m' }); // Access token expires in 15 min
};

// Function to generate refresh token
export const generateRefreshToken = (userId: string): string => {
  return jwt.sign({ id: userId }, REFRESH_SECRET_KEY, { expiresIn: '7d' }); // Refresh token expires in 7 days
};

// Function to verify a JWT token
export const verifyToken = (token: string): any => {
  return jwt.verify(token, SECRET_KEY);
};

// Function to verify a refresh token
export const verifyRefreshToken = (token: string): any => {
  return jwt.verify(token, REFRESH_SECRET_KEY);
};

// ... (rest of your functions)