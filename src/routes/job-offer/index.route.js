import { Router } from 'express'
import { jobOfferController } from '../../controllers/index.controllers.js'

const jobOfferRouter = Router()

jobOfferRouter.post('/', jobOfferController.register)
jobOfferRouter.get('/', jobOfferController.getAll)
jobOfferRouter.get('/company/:id', jobOfferController.getByCompany)
jobOfferRouter.get('/:id', jobOfferController.getById)
jobOfferRouter.put('/:id', jobOfferController.update)
jobOfferRouter.delete('/:id', jobOfferController.remove)

export default jobOfferRouter
