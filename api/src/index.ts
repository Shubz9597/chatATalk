import express, {Router} from 'express';
import cors from 'cors';
import {userHandlerRouter} from './routes/user';
import morgan from 'morgan';

const port = 4000;
const router = Router();
const app = express();

app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use(express.json());

//Now from here it will contain all of the router routes

//User route
router.use('/users', userHandlerRouter);

app.use('/', router);



app.listen(port, () => console.log(`Server started at ${port}`));