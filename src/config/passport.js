import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from '../models/User.js';

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extract JWT from the Authorization header
  secretOrKey: process.env.JWT_SECRET // Your secret key from env
};

export const passportConfig = (passport) => {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      try {
        // Find the user in the database using the payload id
        const user = await User.findById(jwt_payload.id).select('-password');
        if (user) {
          return done(null, user);
        } else {
          return done(null, false); // No user found
        }
      } catch (error) {
        return done(error, false);
      }
    })
  );
};
