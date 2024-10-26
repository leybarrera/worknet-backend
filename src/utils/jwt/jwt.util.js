import jwt from 'jsonwebtoken'
import { SECRET_WORD } from '../../config/envs.config.js'
const { sign, verify } = jwt

const generateToken = (payload) => sign(payload, SECRET_WORD)

const verifyToken = (token) => verify(token, SECRET_WORD)

export default { generateToken, verifyToken }
