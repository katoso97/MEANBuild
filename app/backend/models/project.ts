import * as mongoose from 'mongoose';
import {Model} from './model';
import modelSchema from './model';

export interface Project extends mongoose.Document {
  dateCreated:Date;
  title: string;
  connection: string;
  models: Model[];
}

let projectSchema = new mongoose.Schema({
  dateCreated: {
    type: Date,
    required: true
  },
  title: {
    type: String,
    lowercase: true,
    maxlength: 50,
    required: true
  },
  connection: {
    type: String,
    default: 'No Connection String Provided',
    required: false
  },
  models: {
    type: [modelSchema]
  }
});

export default projectSchema;
