import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import './database'
import { Request,Response,NextFunction } from 'express'
import { AppDataSource } from './database/data-source'
import userRoutes from './app/routes/userRouter'
import accounteRoutes from './app/routes/accountRouter'

const app = express()

app.use(cors())

app.use(express.json())

app.use('/users',userRoutes)
app.use('/account',accounteRoutes)

app.use((err: Error,req: Request,res: Response,next: NextFunction) => {

  if(err instanceof Error){
      return res.status(400).json({
          error:err.message
      })
  }

  return res.status(500).json({
      status: "error",
      message: "Internal Server Error"
  })
} )

AppDataSource.initialize().then(async () => {
  console.log('Database OK')
  app.listen(3000, () => {
    console.log('Server started on Port 3000')
  })
})

