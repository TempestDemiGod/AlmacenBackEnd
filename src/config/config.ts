import { configDotenv } from 'dotenv'
configDotenv()

export const PORT = process.env.PORT || ''
export const URI_DB = process.env.URI_DB || ''
export const FRONT_END = process.env.FRONT_END || ''
export const TOKEN_SECRET = process.env.TOKEN_SECRET || ''
export const API_KEY = process.env.API_KEY || ''
export const API_SECRET = process.env.API_SECRET || ''
export const CLOUD_NAME = process.env.CLOUD_NAME || ''