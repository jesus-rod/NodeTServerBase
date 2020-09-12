// We had to install @types/node to make `require` work
import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
//import our routes
import routes from './routes/routeTemplate';
const app = express();
app.use(json());
app.use('/routes', routes);

app.use((err: Error, req: Request , res: Response, next: NextFunction) => {

})

app.listen(3000);