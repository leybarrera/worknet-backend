import { Router } from 'express'
import { roleController } from '../../controllers/index.controllers.js'

const roleRouter = Router()

roleRouter.get('/', roleController.getAllValids)
roleRouter.get('/all', roleController.getAll)
roleRouter.get('/:id', roleController.getById)
roleRouter.post('/', roleController.register)
roleRouter.delete('/:id', roleController.remove)
roleRouter.put('/:id', roleController.update)

export default roleRouter
