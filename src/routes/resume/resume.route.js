import { Router } from 'express'
import { resumeController } from '../../controllers/index.controllers.js'
import { multerHelper } from '../../helpers/index.helpers.js'

const resumeRouter = Router()

resumeRouter.get('/', resumeController.getAll)
resumeRouter.get('/:id', resumeController.getById)
resumeRouter.get('/user/:user_id', resumeController.getByUser)
resumeRouter.post(
  '/:id',
  multerHelper.upload.single('resume'),
  resumeController.register
)
resumeRouter.delete('/user/:id', resumeController.remove)
resumeRouter.put('/:id', resumeController.update)

export default resumeRouter
