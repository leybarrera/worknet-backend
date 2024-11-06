import { Interaction } from '../../lib/conn.js'

const update = async (id, data) => {
  const interaction = await Interaction.findOne({
    where: { id },
  })

  if (!interaction) return { code: 404, message: 'Interacción no encontrada' }

  const [rows] = await Interaction.update(data, {
    where: {
      id,
    },
  })

  return rows > 0
    ? { code: 200, message: 'Interacción actualizada con éxito' }
    : {
        code: 400,
        message:
          'No se pudo actualizar la interacción. Por favor, inténtelo más tarde',
      }
}

export default update
