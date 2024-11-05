import { Router } from 'express'
import { evaluationController } from '../../controllers/index.controllers.js'

const evaluationRouter = Router()

evaluationRouter.post('/', evaluationController.register)
evaluationRouter.get('/', evaluationController.getAll)
evaluationRouter.get('/:id', evaluationController.getById)
evaluationRouter.delete('/:id', evaluationController.remove)

export default evaluationRouter
