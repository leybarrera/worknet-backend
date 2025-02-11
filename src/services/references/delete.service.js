import { Reference } from '../../lib/conn.js'

const deleteReference = async (id) => {
  const rowsDeleted = await Reference.destroy({
    where: {
      id,
    },
  })

  return rowsDeleted > 0
    ? { code: 200, message: 'Referencia eliminada con éxito' }
    : { code: 400, message: 'No se pudo eliminar la referencia' }
}

export default deleteReference
