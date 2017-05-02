import * as mongoose from 'mongoose';

export interface Entity extends mongoose.Document {
  name: string;
  data: string;
  required: boolean;
}

let entitySchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 30,
    required: true
  },
  data: {
    type: String,
    enum: ['String', 'Number', 'Date', 'Buffer', 'Boolean', 'Mixed', 'ObjectId', 'Array', 'Enum String'],
    required: true
  },
  required: {
    type: String,
    required: true
  }
});

export default entitySchema;
