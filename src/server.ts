import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import './database'

const app = express()

app.use(cors())

app.use(express.json())

app.listen(3000, () => {
    console.log('Server started on Port 3000')
})
