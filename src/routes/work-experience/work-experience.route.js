import { Router } from 'express'
import { workExperienceController } from '../../controllers/index.controllers.js'

const workExperienceRouter = Router()

workExperienceRouter.get('/user/:user_id', workExperienceController.getByUser)
workExperienceRouter.post('/', workExperienceController.register)
workExperienceRouter.delete('/:id', workExperienceController.remove)
workExperienceRouter.put('/:id', workExperienceController.update)

export default workExperienceRouter
