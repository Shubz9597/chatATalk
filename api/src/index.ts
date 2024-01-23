import express, {Router} from 'express';
import cors from 'cors';
import {userHandlerRouter} from './routes/user';

const port = 4000;
const router = Router();
const app = express();

app.use(cors());

app.use(express.json());

//Now from here it will contain all of the router routes

//User route
router.use('/user', userHandlerRouter);



app.listen(port, () => console.log(`Server started at ${port}`));