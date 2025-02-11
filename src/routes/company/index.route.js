import { Router } from 'express'
import { companyController } from '../../controllers/index.controllers.js'

const companyRouter = Router()

companyRouter.get('/', companyController.getAll)
companyRouter.get('/:id', companyController.getById)
companyRouter.post('/', companyController.register)
companyRouter.delete('/:id', companyController.remove)
companyRouter.put('/:id', companyController.update)
companyRouter.put('/recovery/:id', companyController.recoveryCompany)
companyRouter.patch('/change-password/:id', companyController.updatePassword)

export default companyRouter
