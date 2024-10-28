import { Router } from 'express'
import { companyController } from '../../controllers/index.controllers.js'

const companyRouter = Router()

companyRouter.get('/', companyController.getAll)
companyRouter.get('/:id', companyController.getById)
companyRouter.get('/user/:user_id', companyController.getByUser)
companyRouter.post('/', companyController.register)
companyRouter.delete('/:id', companyController.remove)
companyRouter.put('/:id', companyController.update)
companyRouter.put('/recovery/:id', companyController.recoveryCompany)

export default companyRouter
