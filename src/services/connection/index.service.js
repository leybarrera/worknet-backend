import register from './post.service.js'
import updateStatus from './update.service.js'
import remove from './delete.service.js'
import { getPendingConnections, getByUser } from './get.service.js'

export default {
  register,
  updateStatus,
  remove,
  getByUser,
  getPendingConnections,
}
