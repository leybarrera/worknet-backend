import { Router } from 'express'
import { recommendationController } from '../../controllers/index.controllers.js'

const recommerdationRouter = Router()

recommerdationRouter.get('/', recommendationController.getAll)
recommerdationRouter.get('/:id', recommendationController.getById)
recommerdationRouter.post('/', recommendationController.register)
recommerdationRouter.delete('/:id', recommendationController.remove)
recommerdationRouter.put('/:id', recommendationController.update)

export default recommerdationRouter
