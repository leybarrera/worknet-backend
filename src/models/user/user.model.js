import { DataTypes } from 'sequelize'

const UserModel = (sequelize) => {
  sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      dni: {
        type: DataTypes.STRING,
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 255],
        },
      },

      profile_picture: {
        type: DataTypes.STRING,
        // allowNull: false,
        // validate: {
        //   isUrl: true,
        // },
      },

      gender: {
        type: DataTypes.ENUM,
        values: ['M', 'F', 'Otro'],
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      role: {
        type: DataTypes.ENUM,
        values: ['Administrador', 'Candidato', 'Reclutador'],
        defaultValue: 'Candidato',
      },
    },
    { timestamps: false }
  )
}

export default UserModel
