import { Sequelize } from 'sequelize'

const FaqModel = (sequelize) => {
  sequelize.define(
    'Faq',
    {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      question: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      answer: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      category: {
        type: Sequelize.ENUM,
        values: ['General', 'Empleo', 'Registro', 'Soporte', 'Empresas'],
        allowNull: false,
      },
    },
    { timestamps: false }
  )
}

export default FaqModel
