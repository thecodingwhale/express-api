import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Task from './models/taskModel'; // eslint-disable-line
import routes from './routes/tasks';

const app = express();
const port = process.env.PORT || 3000;

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/todoDB');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app); // register the route

app.use((req, res) => {
  res.status(404).send({url: req.originalUrl + ' not found'});
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
