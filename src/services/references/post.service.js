import { Reference } from '../../lib/conn.js'

const saveReference = async (data) => {
  const reference = await Reference.create(data)

  return reference
    ? { code: 201, message: 'Referencia creada con éxito' }
    : { code: 400, message: 'No se pudo crear la referencia' }
}

export default saveReference
