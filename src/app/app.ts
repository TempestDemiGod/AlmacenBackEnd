import express from 'express'
import cors from 'cors'
import allRouter from '../routes/main.route'


const app = express()

app.use(express.json())
app.use(cors(
    {
        origin: ['*']
    }
))

app.use('/api/v1',allRouter)

export default app