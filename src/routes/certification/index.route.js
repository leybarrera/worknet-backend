import { Router } from 'express'
import { certificactionController } from '../../controllers/index.controllers.js'

const certificationRouter = Router()

certificationRouter.get('/', certificactionController.getAll)
certificationRouter.get('/:id', certificactionController.getById)
certificationRouter.get('/user/:user_id', certificactionController.getByUser)
certificationRouter.post('/', certificactionController.register)
certificationRouter.delete('/:id', certificactionController.remove)
certificationRouter.put('/:id', certificactionController.update)

export default certificationRouter
