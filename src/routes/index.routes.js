import { Router } from 'express'
import roleRouter from './role/index.route.js'
import userRouter from './user/index.route.js'

const rootRouter = Router()

rootRouter.use('/roles', roleRouter)
rootRouter.use('/users', userRouter)
export default rootRouter
