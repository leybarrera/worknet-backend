import remove from './delete.controller.js'
import { getAll, getByJobOffer, getByUser } from './get.controller.js'
import register from './post.controller.js'
import update from './put.controller.js'

export default {
  remove,
  getAll,
  getByUser,
  getByJobOffer,
  register,
  update,
}
