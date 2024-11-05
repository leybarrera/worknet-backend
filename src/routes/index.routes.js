import { Router } from 'express'
import roleRouter from './role/index.route.js'
import userRouter from './user/index.route.js'
import companyRouter from './company/index.route.js'
import certificationRouter from './certification/index.route.js'
import jobOfferRouter from './job-offer/index.route.js'
import connectionRouter from './connection/connection.route.js'
import evaluationRouter from './evaluation/evaluation.route.js'

const rootRouter = Router()

rootRouter.use('/roles', roleRouter)
rootRouter.use('/users', userRouter)
rootRouter.use('/certifications', certificationRouter)
rootRouter.use('/companies', companyRouter)
roleRouter.use('/job-offers', jobOfferRouter)
roleRouter.use('/connections', connectionRouter)
roleRouter.use('/evaluations', evaluationRouter)
export default rootRouter
