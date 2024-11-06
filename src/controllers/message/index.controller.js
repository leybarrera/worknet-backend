import remove from './delete.controller.js'
import { getByUser, getConversation } from './get.controller.js'
import register from './post.controller.js'
import updateIsRead from './put.controller.js'

export default {
  remove,
  getConversation,
  getByUser,
  register,
  updateIsRead,
}
