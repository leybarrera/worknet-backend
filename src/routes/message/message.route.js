import { Router } from 'express'
import { messageController } from '../../controllers/index.controllers.js'

const messageRouter = Router()

messageRouter.get('/', messageController.getConversation)
messageRouter.get('/user/:user_id', messageController.getByUser)
messageRouter.post('/', messageController.register)
messageRouter.delete('/:id', messageController.remove)
messageRouter.put('/:id', messageController.updateIsRead)

export default messageRouter
