import { Connection } from '../../lib/conn.js'

const getByUser = async (id) => {
  const connections = await Connection.findAll({
    where: {
      UserSourceId: id,
      status: 'Aceptada',
    },
  })

  return { code: 200, connections }
}

const getPendingConnections = async (id) => {
  const connections = await Connection.findAll({
    where: {
      UserSourceId: id,
      status: 'Pendiente',
    },
  })
  return { code: 200, connections }
}

export { getByUser, getPendingConnections }
