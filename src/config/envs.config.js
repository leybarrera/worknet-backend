import 'dotenv/config'

const {
  PORT = 3000,
  NODE_ENV = 'development',
  DB_DEV,
  DB_PROD,
  SECRET_WORD,
  CLOUDINARY_KEY,
  CLOUDINARY_NAME,
  CLOUDINARY_API_SECRET,
  GMAIL_USER,
  GMAIL_PASSWORD,
} = process.env

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

const NODEMAILER_CONFIG = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASSWORD,
  },
}

const CLOUDINARY_URL = `cloudinary://${CLOUDINARY_KEY}:${CLOUDINARY_API_SECRET}@${CLOUDINARY_NAME}`

console.log(CLOUDINARY_URL)

export {
  PORT,
  NODE_ENV,
  CONNECTION,
  SECRET_WORD,
  CLOUDINARY_URL,
  NODEMAILER_CONFIG,
}
