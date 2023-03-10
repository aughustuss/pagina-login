const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const RefreshToken = require('../models/refreshToken');
require('dotenv').config(); //load .env

class AuthService {
  
  static async authenticate(email, password) {
    // verify if the user exists in database
    const user = await User.findOne({ email });

    if (!user) {
      return null;
    }

    // verify password
    if (!await bcrypt.compare(password, user.passwordHash)) {
      return null;
    }

    // return user 
    return user;
  }

  static generateTokens(user) {
    const accessToken = jwt.sign(
      { userId: user.id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION }
    );

    const refreshToken = jwt.sign(
      { userId: user.id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: process.env.REFRESH_TOKEN_EXPIRATION }
    );

    const refreshTokenObject = new RefreshToken({
      userId: user.id,
      token: refreshToken,
      expiresAt: new Date(Date.now() + process.env.REFRESH_TOKEN_EXPIRATION * 1000)
    });

    refreshTokenObject.save();

    return { accessToken, refreshToken };
  }

  static async verifyAccessToken(token) {
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      return decoded.userId;
    } catch (err) {
      return null;
    }
  }

  static async verifyRefreshToken(token) {
    const refreshTokenObject = await RefreshToken.findOne({ token });
    if (!refreshTokenObject) {
      return null;
    }
    if (refreshTokenObject.expiresAt < Date.now()) {
      refreshTokenObject.remove();
      return null;
    }
    return refreshTokenObject.userId;
  }
}

module.exports = AuthService;