import cors from 'cors';
import express from 'express';
import { UserRoutes } from '../../modules/users/routes/user.routes';


export class Server {
    public static create() {
        const app = express();
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use(cors());
  
        
        app.use('/users', UserRoutes.define());
        app.get('/', (_, res) => res.status(200).json({ ok: true }));

        return app;
    }
}