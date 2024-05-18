import express from 'express'
import cors from 'cors'
import allRouter from '../routes/main.route'
import { FRONT_END } from '../config/config'


const app = express()

app.use(express.json())
app.use(cors(
    {
        origin: ['*', FRONT_END]
    }
))

app.use('/api/v1',allRouter)

export default app