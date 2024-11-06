import { Router } from 'express'
import roleRouter from './role/index.route.js'
import userRouter from './user/index.route.js'
import companyRouter from './company/index.route.js'
import certificationRouter from './certification/index.route.js'
import jobOfferRouter from './job-offer/index.route.js'
import connectionRouter from './connection/connection.route.js'
import evaluationRouter from './evaluation/evaluation.route.js'
import jobApplicationRouter from './job-application/job-application.route.js'
import messageRouter from './message/message.route.js'
import resumeRouter from './resume/resume.route.js'
import skillRouter from './skill/skill.route.js'
import userSkillRouter from './user-skill/user-skill.route.js'
import workExperienceRouter from './work-experience/work-experience.route.js'
import interactionRouter from './interaction/interaction.route.js'
import recommerdationRouter from './recommendation/recommendation.route.js'

const rootRouter = Router()

rootRouter.use('/roles', roleRouter)
rootRouter.use('/users', userRouter)
rootRouter.use('/certifications', certificationRouter)
rootRouter.use('/companies', companyRouter)
roleRouter.use('/job-offers', jobOfferRouter)
roleRouter.use('/connections', connectionRouter)
roleRouter.use('/evaluations', evaluationRouter)
roleRouter.use('/job-applications', jobApplicationRouter)
roleRouter.use('/messages', messageRouter)
roleRouter.use('/resumes', resumeRouter)
roleRouter.use('/skills', skillRouter)
roleRouter.use('/user-skills', userSkillRouter)
roleRouter.use('/work-experiences', workExperienceRouter)
roleRouter.use('/interactions', interactionRouter)
roleRouter.use('/recommendations', recommerdationRouter)
export default rootRouter
