import express from "express";
import { userController } from "./controllers";
import morgan from 'morgan';
import cors from "cors-ts";
import helmet from "helmet";

export class App {
    app = express();
    port = 8800;

    useRoutes() {
        this.app.use("/users", userController.router);
    }

    useMiddlewares() {
        this.app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
        this.app.use(cors());
        this.app.use(morgan(':date[iso] ":method :url" :status :res[content-length]'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    async init() {
        this.useMiddlewares();
        this.useRoutes();
        this.app.listen(this.port, () => {
            console.log('Server is listening on: http://localhost:%s', this.port)
        })
    }
}

(async () => {
    const app = new App();
    app.init();
})();