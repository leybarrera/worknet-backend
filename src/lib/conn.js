import { Sequelize } from 'sequelize'
import { CONNECTION } from '../config/envs.config.js'

const sequelize = new Sequelize(CONNECTION.URI, CONNECTION.CONFIG)

export { sequelize }
