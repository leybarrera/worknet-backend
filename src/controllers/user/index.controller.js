import remove from './delete.controller.js'
import {
  getAll,
  getById,
  getByEmail,
  getOnlyValids,
  getOnlyActives,
  getOnlyInactives,
  getRecommendationsUserLogged,
  getRecommendationsUserNotLogged,
} from './get.controller.js'
import register from './post.controller.js'
import { update, recoveryUser, updateProfile } from './put.controller.js'

export default {
  remove,
  getAll,
  getById,
  getByEmail,
  getOnlyValids,
  getOnlyActives,
  getOnlyInactives,
  getRecommendationsUserLogged,
  getRecommendationsUserNotLogged,
  register,
  update,
  recoveryUser,
  updateProfile,
}
