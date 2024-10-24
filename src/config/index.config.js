import 'dotenv/config'

const { PORT = 3000, NODE_ENV = 'development', DB_PROD, DB_DEV } = process.env

const CONNECTION = {
  URI: NODE_ENV === 'development' ? DB_DEV : DB_PROD,
  CONFIG:
    NODE_ENV === 'development'
      ? {
          native: false,
          logging: false,
        }
      : {
          native: false,
          logging: false,
          dialect: 'postgres',
          dialectOptions: {
            ssl: true,
          },
        },
}

export { PORT, NODE_ENV, CONNECTION }
