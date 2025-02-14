import { Sequelize } from 'sequelize'
import { CONNECTION } from '../config/envs.config.js'
import { models } from '../models/index.models.js'

const sequelize = new Sequelize(CONNECTION.URI, CONNECTION.CONFIG)

models.forEach((model) => model(sequelize))

const {
  Certification,
  Company,
  Connection,
  Education,
  Evaluation,
  WorkExperience,
  JobApplication,
  JobOffer,
  Message,
  Recommendation,
  Resume,
  Role,
  Skill,
  UserSkill,
  User,
  Interaction,
  Language,
  Reference,
  Code,
} = sequelize.models

User.hasMany(Certification)
Certification.belongsTo(User)

User.hasMany(Education)
Education.belongsTo(User)

User.hasOne(Resume)
Resume.belongsTo(User)

User.belongsToMany(Skill, { through: UserSkill, foreignKey: 'UserId' })
Skill.belongsToMany(User, { through: UserSkill, foreignKey: 'SkillId' })

Company.hasMany(JobOffer)
JobOffer.belongsTo(Company)

JobOffer.hasMany(JobApplication)
JobApplication.belongsTo(JobOffer)

User.hasMany(JobApplication)
JobApplication.belongsTo(User)

Connection.belongsTo(User, { as: 'SourceUser', foreignKey: 'UserSourceId' })
Connection.belongsTo(User, { as: 'TargetUser', foreignKey: 'UserTargetId' })

Message.belongsTo(User, { as: 'Recipient', foreignKey: 'RecipientId' })

Message.belongsTo(User, { as: 'Sender', foreignKey: 'SenderId' })

Recommendation.belongsTo(User, {
  as: 'Recommender',
  foreignKey: 'RecommenderId',
})
Recommendation.belongsTo(User, { foreignKey: 'UserId' })

JobOffer.hasMany(Evaluation)
Evaluation.belongsTo(JobOffer)

User.hasMany(Evaluation)
Evaluation.belongsTo(User)

User.hasMany(WorkExperience)
WorkExperience.belongsTo(User)

User.hasMany(Language)
Language.belongsTo(User)

User.hasMany(Reference)
Reference.belongsTo(User)

export {
  sequelize,
  Code,
  Certification,
  Company,
  Connection,
  Education,
  Evaluation,
  WorkExperience,
  JobApplication,
  JobOffer,
  Message,
  Recommendation,
  Resume,
  Role,
  Skill,
  UserSkill,
  User,
  Language,
  Reference,
  Interaction,
}
