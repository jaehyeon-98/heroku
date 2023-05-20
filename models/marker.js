const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Marker extends Model {}
  Marker.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: DataTypes.STRING,
      latlng: DataTypes.STRING,
      testing: DataTypes.STRING,
      content: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Marker",
    }
  );
  return Marker;
};
