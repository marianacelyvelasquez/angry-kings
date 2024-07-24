import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
