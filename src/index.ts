/* eslint-disable @typescript-eslint/indent */
import express, { type Express, type Request, type Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port: number | string = process.env.PORT || 4000

// Define las rutas
app.get('/', (req: Request, res: Response) => {
    res.send('First request typescript')
})

// Execute app and listen request to port
app.listen(port, () => {
    console.log('Server on port http://localhost:' + port)
})
