const { Model, DataTypes } = require("sequelize");

module.exports = sequelize => {
  class Recipe extends Model {}
  Recipe.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      readyInMinutes: { type: DataTypes.INTEGER },
      servings: { type: DataTypes.INTEGER, allowNull: false },
      image: { type: DataTypes.TEXT },
      healthScore: { type: DataTypes.INTEGER },
      score: { type: DataTypes.INTEGER },
      summary: { type: DataTypes.TEXT, allowNull: false },
    },
    { sequelize: sequelize, modelName: "Recipe" }
  );
  Recipe.beforeCreate(function (recipe) {
    recipe.title = recipe.title.toLowerCase();
    return recipe;
  });
};
