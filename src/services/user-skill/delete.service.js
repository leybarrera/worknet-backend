import { UserSkill } from '../../lib/conn.js'

const deleteUserSKill = async (id) => {
  const rowsDeleted = await UserSkill.destroy({
    where: {
      id,
    },
  })
  return rowsDeleted > 0
    ? { code: 200, message: 'Habilidad eliminada con éxito' }
    : { code: 404, message: 'Habilidad no encontrada' }
}

export default deleteUserSKill
