const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID, //UUID permite que se cree un id unico y no se pise con el de la API externa
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    healthscore: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: 'https://cdn.pixabay.com/photo/2018/03/05/06/26/board-3200054_960_720.jpg'
    },
    steps: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  }, {
    timestamps: false
  });
};
