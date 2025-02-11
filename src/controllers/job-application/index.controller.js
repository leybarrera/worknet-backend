import { remove, deleteById } from './delete.controller.js'
import { getAll, getByJobOffer, getByUser } from './get.controller.js'
import register from './post.controller.js'
import {
  update,
  rejectPostulation,
  acceptPostulation,
} from './put.controller.js'

export default {
  remove,
  deleteById,
  getAll,
  getByUser,
  getByJobOffer,
  register,
  update,
  rejectPostulation,
  acceptPostulation,
}
