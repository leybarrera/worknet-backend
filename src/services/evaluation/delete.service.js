import { Evaluation } from '../../lib/conn.js'

const remove = async (id) => {
  const evaluation = await Evaluation.findOne({
    where: {
      id,
    },
  })

  if (!evaluation) return { code: 404, message: 'Evaluación no encontrada' }

  const rowsDeleted = await evaluation.destroy()
  return rowsDeleted > 0
    ? { code: 200, message: 'Evaluación eliminada con éxito' }
    : {
        code: 400,
        message:
          'No se pudo eliminar la evaluación. Por favor, inténtelo más tarde',
      }
}

export default remove
