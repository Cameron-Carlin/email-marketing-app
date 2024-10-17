import { NextResponse } from 'next/server';
import { validateUserLogin, generateRefreshToken } from '../../../../utils/auth';
import cookie from 'cookie';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json({ message: 'Email and password are required' }, { status: 422 });
  }

  try {
    const { user, token } = await validateUserLogin(email, password);
    const refreshToken = generateRefreshToken(user._id); // Generate a refresh token

    // Set cookies for access and refresh tokens
    const res = NextResponse.json({ message: 'Login successful', token });
    res.cookies.set('token', token, { httpOnly: true, path: '/' });
    res.cookies.set('refreshToken', refreshToken, { httpOnly: true, path: '/' });

    return res;
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 401 });
  }
}