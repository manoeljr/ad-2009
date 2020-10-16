import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import './database';
import errorHandler from './errors/handler';
import routes from './routes';


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(3333, () => {
    console.log('Servidor rodando na porta 3333 !');
});