import bcrypt from 'bcryptjs'
const { hash, compare } = bcrypt
const SALT_ROUNDS = 12

const hashPassword = async (password) => await hash(password, SALT_ROUNDS)

const comparePassword = async (password, hash) => await compare(password, hash)

export default { hashPassword, comparePassword }
