import { Education } from '../../lib/conn.js'

const getByUser = async (id) => {
  const educations = await Education.findAll({
    where: {
      UserId: id,
    },
  })

  return { code: 200, educations }
}

const getAll = async () => {
  const educations = await Education.findAll({})
  return { code: 200, educations }
}

export { getByUser, getAll }
