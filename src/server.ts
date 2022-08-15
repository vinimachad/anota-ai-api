import db from './database'
import express from "express";
import './shared'
import 'express-async-errors'
import { routes } from './routes';
import useErrors from './errors';

db().then(() => startServerSetup()).catch(error => console.log(`Failure ${error}`))

function startServerSetup() {
    const app = express()

    app.use(express.json())
    app.use(routes)
    app.use(useErrors)

    app.listen(process.env.PORT || 8080, () => {
        console.log('Server is running')
    })
}