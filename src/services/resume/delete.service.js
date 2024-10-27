import { Resume } from '../../lib/conn'

const remove = async (id) => {
  const rowsDeleted = await Resume.destroy({
    where: {
      id,
    },
  })

  return rowsDeleted > 0
    ? { code: 200, message: 'Currículum eliminado con éxito' }
    : { code: 404, message: 'Currículum no encontrado' }
}

export default remove
