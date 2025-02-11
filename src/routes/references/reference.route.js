import { Router } from 'express'
import { referenceController } from '../../controllers/index.controllers.js'

const referenceRouter = Router()

referenceRouter.get('/user/:id', referenceController.getByUser)
referenceRouter.post('/', referenceController.saveReference)
referenceRouter.delete('/:id', referenceController.deleteReference)

export default referenceRouter
