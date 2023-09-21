import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import register from './routes/register.js';
import login from './routes/login.js';
import item from './routes/item.js';

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({origin: '*'}));

app.use('/register', register);
app.use('/login', login);
app.use('/item', item);
app.use

const port = 3001 || process.env.port;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
