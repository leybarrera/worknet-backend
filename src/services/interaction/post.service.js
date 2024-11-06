import { Interaction } from '../../lib/conn.js'

const register = async (data) => {
  const interaction = await Interaction.create(data)
  return interaction
    ? { code: 201, message: 'Interacción creada con éxito' }
    : {
        code: 400,
        message:
          'No se pudo crear la interacción. Por favor, inténtelo más tarde',
      }
}
export default register
