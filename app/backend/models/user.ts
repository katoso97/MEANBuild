import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import {Project} from './project';
import projectSchema from './project';

export interface User extends mongoose.Document {
  dateCreated: Date;
  fullName: string;
  username: string;
  email: string;
  password: string;
  projects: Project[];
  profilePicture: string;
  githubURL: string;
  bitbucketURL: string;
  linkedinURL: string;
}

let userSchema = new mongoose.Schema({
  dateCreated: {
    type: Date,
    required: true
  },
  fullName: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true
  },
  username: {
    type: String,
    minlength: 6,
    maxlength: 15,
    unique: true,
    required: true
  },
  email: {
    type: String,
    maxlength: 50,
    required: true
  },
  projects: {
    type: [projectSchema]
  },
  password: {
    type: String,
    select: false,
    minlength: 8,
    maxlength: 50,
    required: true
  },
  profilePicture: {
    type: String,
    default: 'https://help.github.com/assets/images/help/profile/identicon.png',
    required: false
  },
  githubURL: {
    type: String,
    default: '',
    required: false
  },
  bitbucketURL: {
    type: String,
    default: '',
    required: false
  },
  linkedinURL: {
    type: String,
    default: '',
    required: false
  }
});

userSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(password, done) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    done(err, isMatch);
  });
};

export default mongoose.model<User>('User', userSchema);
