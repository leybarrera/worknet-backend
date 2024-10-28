import { Router } from 'express'
import roleRouter from './role/index.route.js'

const rootRouter = Router()

rootRouter.use('/roles', roleRouter)

export default rootRouter
