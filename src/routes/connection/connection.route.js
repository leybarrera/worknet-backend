import { Router } from 'express'
import { connectionController } from '../../controllers/index.controllers.js'

const connectionRouter = Router()

connectionRouter.get('/user/:id', connectionController.getByUser)
connectionRouter.get('/pending/:id', connectionController.getPendingConnections)
connectionRouter.post('/', connectionController.register)
connectionRouter.put('/:id', connectionController.update)
connectionRouter.delete('/unfollow', connectionController.remove)

export default connectionRouter
