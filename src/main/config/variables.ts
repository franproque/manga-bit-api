import { config } from 'dotenv'
config()

export const server = {
  port: parseInt(process.env.PORT ?? '3000')
}

export const production = {
  isProd: (process.env.PRODUCTION === 'true')
}

export const database = {
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT ?? '5432'),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
}
