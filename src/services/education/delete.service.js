import { ro } from 'date-fns/locale'
import { Education } from '../../lib/conn.js'

const deleteEducation = async (id) => {
  const rowsDeleted = await Education.destroy({
    where: {
      id,
    },
  })

  return rowsDeleted > 0
    ? { code: 200, message: 'Educación eliminada con éxito' }
    : { code: 400, message: 'Error al eliminar. Intente de nuevo.' }
}

export default deleteEducation
