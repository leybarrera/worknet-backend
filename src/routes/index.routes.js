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
import authRouter from './auth/index.route.js'
import educationRouter from './education/educattion.router.js'
import referenceRouter from './references/reference.route.js'

const rootRouter = Router()

rootRouter.use('/roles', roleRouter)
rootRouter.use('/users', userRouter)
rootRouter.use('/certifications', certificationRouter)
rootRouter.use('/companies', companyRouter)
rootRouter.use('/job-offers', jobOfferRouter)
rootRouter.use('/connections', connectionRouter)
rootRouter.use('/evaluations', evaluationRouter)
rootRouter.use('/job-applications', jobApplicationRouter)
rootRouter.use('/messages', messageRouter)
rootRouter.use('/resumes', resumeRouter)
rootRouter.use('/skills', skillRouter)
rootRouter.use('/user-skills', userSkillRouter)
rootRouter.use('/work-experiences', workExperienceRouter)
rootRouter.use('/interactions', interactionRouter)
rootRouter.use('/recommendations', recommerdationRouter)
rootRouter.use('/auth', authRouter)
rootRouter.use('/educations', educationRouter)
rootRouter.use('/references', referenceRouter)
export default rootRouter
