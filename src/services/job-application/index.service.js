import register from './post.service.js'
import {
  update,
  rejectPostulation,
  acceptPostulation,
} from './update.service.js'
import { remove, deleteByID } from './delete.service.js'
import { getAll, getByUser, getByJobOffer } from './get.service.js'

export default {
  register,
  update,
  rejectPostulation,
  remove,
  deleteByID,
  getAll,
  getByUser,
  getByJobOffer,
  acceptPostulation,
}
