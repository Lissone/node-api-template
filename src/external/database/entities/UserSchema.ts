import { IUser } from '@entities/IUser';

import { mongoose } from '../dbConfig';

// ---------------------------------------------------- //

const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
    lowercase: true,
  },
  password: {
    type: String,
    require: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const UserSchema = mongoose.model<IUser>('User', schema);
