import { NextResponse } from 'next/server';
import { verifyRefreshToken, generateToken } from '../../../../utils/auth';

export async function POST(request: Request) {
  const { refreshToken } = await request.json();

  if (!refreshToken) {
    return NextResponse.json({ message: 'Refresh token is required' }, { status: 401 });
  }

  try {
    const decoded = verifyRefreshToken(refreshToken);
    const token = generateToken(decoded.id); // Generate a new access token

    // Set the new access token as a cookie
    const res = NextResponse.json({ token });
    res.cookies.set('token', token, { httpOnly: true, path: '/' });

    return res;
  } catch (error) {
    return NextResponse.json({ message: 'Invalid refresh token' }, { status: 401 });
  }
}