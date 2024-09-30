import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [50, 'First name cannot be longer than 50 characters']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    maxlength: [50, 'Last name cannot be longer than 50 characters']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
    trim: true,
    match: [
      /^\S+@\S+\.\S+$/, 
      'Please use a valid email address'
    ]
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    trim: true,
    minlength: [6, 'Password must be at least 6 characters long'],
    select: false // Do not return the password field in queries
  }
}, {
  timestamps: true
});

const User = model('User', userSchema);

export default User;
