import remove from './delete.controller.js'
import { getByUser, getPendingConnections } from './get.controller.js'
import register from './post.controller.js'
import update from './put.controller.js'

export default {
  remove,
  getByUser,
  getPendingConnections,
  register,
  update,
}
