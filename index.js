import { PORT, NODE_ENV } from './src/config/envs.config.js'
import { sequelize } from './src/lib/conn.js'
import { loaderData } from './src/scripts/loader.js'
import server from './src/server.js'

sequelize
  .sync({ logging: false, force: true, alter: true })
  .then(() => {
    console.log(`Database connected in ${NODE_ENV} mode`)
    server.listen(PORT, () => {
      console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`)
    })
    loaderData()
  })
  .catch((err) => {
    console.log('Error connecting to database: ', err.message)
  })
