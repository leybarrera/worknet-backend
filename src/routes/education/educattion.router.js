import { Router } from 'express'
import { educationController } from '../../controllers/index.controllers.js'

const educationRouter = Router()

educationRouter.post('/', educationController.saveEducation)
educationRouter.get('/', educationController.getAll)
educationRouter.get('/user/:id', educationController.getByUser)
educationRouter.delete('/:id', educationController.deleteEducation)

export default educationRouter
