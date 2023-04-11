import crypto from 'crypto';
import jwt from 'jsonwebtoken';

export const hashToken = (token: string) => {
  return crypto.createHash('sha512').update(token).digest('hex');
};

export const generateToken = (data: { [key: string]: any }, secretKey: string, expiresIn?: string) => {
  if (secretKey) {
    return expiresIn
      ? jwt.sign(data, secretKey, {
          expiresIn,
        })
      : jwt.sign(data, secretKey);
  } else {
    return undefined;
  }
};
