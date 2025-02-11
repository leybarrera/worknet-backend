import { Reference } from '../../lib/conn.js'

const getByUser = async (id) => {
  const references = await Reference.findAll({
    where: {
      UserId: id,
    },
  })

  return { code: 200, references }
}

export { getByUser }
