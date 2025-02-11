import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import nodemailer from 'nodemailer'
import { NODEMAILER_CONFIG } from '../../config/envs.config.js'

const generatePathName = (fileName) => {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const pathname = path.join(__dirname, `../../html/${fileName}.html`)
  return pathname
}

const send = (to, file, subject) => {
  const transporter = nodemailer.createTransport(NODEMAILER_CONFIG)
  transporter.sendMail({
    from: 'crisrodam1996@gmail.com',
    to,
    subject,
    html: file,
  })
}

const welcome = (to, name, token) => {
  const pathname = generatePathName('welcome')
  const file = fs
    .readFileSync(pathname, { encoding: 'utf-8' })
    .toString()
    .replace('${name}', name)
    .replace('${token}', token)
  send(to, file, 'Worknet - Bienvenido')
}

const confirmActivation = (to, name) => {
  const pathname = generatePathName('confirm-activation')
  const file = fs
    .readFileSync(pathname, { encoding: 'utf-8' })
    .toString()
    .replace('${name}', name)
  send(to, file, 'Worknet - Cuenta Activada')
}

const rejectPostulation = (to, name, job_title) => {
  const pathname = generatePathName('reject-postulation')
  const file = fs
    .readFileSync(pathname, { encoding: 'utf-8' })
    .toString()
    .replace('${name}', name)
    .replace('${jobTitle}', job_title)
  send(to, file, 'Worknet - Cuenta Activada')
}

const acceptPostulation = (to, name, job_title, company_name) => {
  const pathname = generatePathName('accept-postulation')
  const file = fs
    .readFileSync(pathname, { encoding: 'utf-8' })
    .toString()
    .replace('${name}', name)
    .replace('${jobTitle}', job_title)

  send(to, file, 'Worknet - Cuenta Activada')
}
const recuperarContraseña = (to, cliente, codigo) => {
  const pathname = generatePathName('recuperar_contraseña')
  const file = fs
    .readFileSync(pathname, { encoding: 'utf-8' })
    .toString()
    .replace('${NOMBRE_CLIENTE}', cliente)
    .replace('${RECOVERY_CODE}', codigo)

  send(to, file, 'Recuperación de contraseña')
}

export default {
  recuperarContraseña,
  welcome,
  confirmActivation,
  rejectPostulation,
  acceptPostulation,
}
