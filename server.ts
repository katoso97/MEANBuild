import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';

import users from './app/backend/api/users';

let app = express();

const CONNECTION_STRING = 'mongodb://group:wuladubdub@ds111441.mlab.com:11441/meanbuild';

mongoose.connect(CONNECTION_STRING).then(() => {
  console.log('We are connected');
}).catch((err) => {
  console.log(err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('./app/frontend/'));

app.use('/api/users', users);

app.get('*', (req, res, next) => {
  res.sendfile('app/frontend/index.html');
});

app.listen(3000);
console.log('listening on port 3000');
