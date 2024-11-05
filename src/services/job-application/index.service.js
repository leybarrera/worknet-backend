import register from './post.service.js'
import update from './update.service.js'
import remove from './delete.service.js'
import { getAll, getByUser, getByJobOffer } from './get.service.js'

export default {
  register,
  update,
  remove,
  getAll,
  getByUser,
  getByJobOffer,
}
