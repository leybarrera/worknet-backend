import { Router } from 'express'
import { jobApplicationController } from '../../controllers/index.controllers.js'

const jobApplicationRouter = Router()

jobApplicationRouter.get('/', jobApplicationController.getAll)
jobApplicationRouter.get('/user/:user_id', jobApplicationController.getByUser)
jobApplicationRouter.get(
  '/job-offer/:job_offer_id',
  jobApplicationController.getByJobOffer
)
jobApplicationRouter.post('/', jobApplicationController.register)
jobApplicationRouter.delete('/delete-offer', jobApplicationController.remove)
jobApplicationRouter.delete('/:id', jobApplicationController.deleteById)
jobApplicationRouter.put('/:id', jobApplicationController.update)
jobApplicationRouter.patch(
  '/reject/:id',
  jobApplicationController.rejectPostulation
)
jobApplicationRouter.patch(
  '/accept/:id',
  jobApplicationController.acceptPostulation
)

export default jobApplicationRouter
