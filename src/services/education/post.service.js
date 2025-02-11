import { Education } from '../../lib/conn.js'

const saveEducation = async (data) => {
  const education = await Education.create(data)
  return education
    ? { code: 201, message: 'Educación agregada' }
    : {
        code: 400,
        message: 'No se pudo agregar la educación. Intenta de nuevo',
      }
}

export default saveEducation
