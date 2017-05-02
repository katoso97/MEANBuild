import * as mongoose from 'mongoose';
import {Entity} from './entity';
import entitySchema from './entity';

export interface Model extends mongoose.Document {
  name: string;
  entities: Entity[];
}

let modelSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 30,
    required: true
  },
  entities: {
    type: [entitySchema]
  }
});

export default modelSchema;
