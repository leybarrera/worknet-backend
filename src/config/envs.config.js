import 'dotenv/config'

const { PORT = 3000, NODE_ENV = 'development', DB_DEV, DB_PROD } = process.env

const CONNECTION = {
  URI: NODE_ENV === 'production' ? DB_PROD : DB_DEV,
  CONFIG:
    NODE_ENV === 'production'
      ? {
          native: false,
          logging: false,
          dialect: 'postgres',
          dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          },
        }
      : {
          native: false,
          logging: false,
        },
}

export { PORT, NODE_ENV, CONNECTION }
