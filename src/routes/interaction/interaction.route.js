import { Router } from 'express'
import { interactionController } from '../../controllers/index.controllers.js'

const interactionRouter = Router()

interactionRouter.get('/', interactionController.getAll)
interactionRouter.get('/:id', interactionController.getById)
interactionRouter.get('/type', interactionController.getByType)
interactionRouter.post('/', interactionController.register)
interactionRouter.delete('/:id', interactionController.remove)
interactionRouter.put('/:id', interactionController.update)

export default interactionRouter
