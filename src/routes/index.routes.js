import { Router } from 'express'
import roleRouter from './role/index.route.js'
import userRouter from './user/index.route.js'
import companyRouter from './company/index.route.js'
import certificationRouter from './certification/index.route.js'

const rootRouter = Router()

rootRouter.use('/roles', roleRouter)
rootRouter.use('/users', userRouter)
rootRouter.use('/certifications', certificationRouter)
rootRouter.use('/companies', companyRouter)
export default rootRouter
