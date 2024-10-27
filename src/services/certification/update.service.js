const update = async (id, data) => {
  const [rows] = await Certification.update(data, {
    where: {
      id,
    },
  })

  return rows > 0
    ? { code: 200, message: 'Certificación actualizada con éxito' }
    : {
        code: 400,
        message:
          'No se pudo actualizar la certificación. Por favor, inténtelo más tarde',
      }
}

export default update
