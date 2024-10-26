import { Sequelize } from 'sequelize'
import { CONNECTION } from '../config/envs.config.js'
import { models } from '../models/index.models.js'

const sequelize = new Sequelize(CONNECTION.URI, CONNECTION.CONFIG)

models.forEach((model) => {
  model(sequelize)
})

const { User, Company, Offer, Role, Application, Applicant, Faq, Employer } =
  sequelize.models

Role.hasMany(User)
User.belongsTo(Role)

Company.hasMany(Employer)
Employer.belongsTo(Company)

User.hasOne(Employer)
Employer.belongsTo(User)

User.hasOne(Applicant)
Applicant.belongsTo(User)

Employer.hasMany(Offer)
Offer.belongsTo(Employer)

Applicant.hasMany(Application)
Application.belongsTo(Applicant)

Offer.hasMany(Application)
Application.belongsTo(Offer)

export {
  sequelize,
  User,
  Company,
  Offer,
  Role,
  Application,
  Applicant,
  Faq,
  Employer,
}
