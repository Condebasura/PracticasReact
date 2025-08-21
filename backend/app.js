import express from "express";
import cors from "cors";
import path, { win32 } from "path";
import helmet from "helmet";
import morgan from "morgan";
import multer from "multer";
import { fileURLToPath } from "url";
import userControllers from "./controllers/userControllers.js"


const _dirname = (process.platform === "win32")? fileURLToPath(new URL(".", import.meta.url)): path.dirname(new URL(import.meta.url).pathname);

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: '*',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Autorization',

};

app.use(helmet());
app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(
    helmet.contentSecurityPolicy({
        directives:{
            scriptSrc: [
                "'self'",
                "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
            ], styleSrc:[
                "'self'",
                'usafe-inline',
                "https://cdn.jsdelivr.net/npm/bootstrap@5.0.3/dist/css/bootstrap.min.css"
            ]
        }
    })
);
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post("/Ingreso", userControllers.PostIngreso);
app.post("/Turno", userControllers.PostTurno);
app.listen(port , ()=>{
    console.log(`El backend esta corriendo en el puerto ${port}`)
})

export {
    _dirname
}