module.exports = (sequelize, DataTypes) => {

  const Post = sequelize.define('posts', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      }
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    }
  })

  Post.associate = (models) => {
    Post.belongsTo(models.User, {foreignKey: 'user_id'})
  }

  return Post

}