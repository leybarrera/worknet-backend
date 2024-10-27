import { DataTypes } from 'sequelize'

const MessageModel = (sequelize) => {
  sequelize.define(
    'Message',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sent_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      RecipientId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },

      SenderId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },

      isRead: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    { timestamps: false }
  )
}

export default MessageModel
