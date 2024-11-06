import { Router } from 'express'
import { skillController } from '../../controllers/index.controllers.js'

const skillRouter = Router()

skillRouter.get('/', skillController.getAll)
skillRouter.get('/:id', skillController.getById)
skillRouter.post('/', skillController.register)
skillRouter.delete('/:id', skillController.remove)
skillRouter.put('/:id', skillController.update)

export default skillRouter
