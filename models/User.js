module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('users', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  })

  User.associate = (models) => {
    User.hasMany(models.Post, {
      as: 'author',
    })
  }

  return User

}