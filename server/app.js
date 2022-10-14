import express from 'express'
import cors from 'cors'
import router from './router/route.js'
import { db } from './db/database.js';


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', router);

app.use((req, res, next) => {
    res.sendStatus(404);
})

app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
});

db.getConnection()
    .then(console.log('DB연결'))

app.listen(process.env.PORT || 4040)