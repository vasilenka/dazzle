module.exports = (sequelize, DataTypes) => {
  let Post = sequelize.define('Post', {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
    },
  });

  Post.associate = function (models) {
    models.Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
