import { Router } from 'express'
import { resumeController } from '../../controllers/index.controllers.js'

const resumeRouter = Router()

resumeRouter.get('/', resumeController.getAll)
resumeRouter.get('/:id', resumeController.getById)
resumeRouter.get('/user/:user_id', resumeController.getByUser)
resumeRouter.post('/', resumeController.register)
resumeRouter.delete('/:id', resumeController.remove)
resumeRouter.put('/:id', resumeController.update)

export default resumeRouter
