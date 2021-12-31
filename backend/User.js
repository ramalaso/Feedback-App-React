const { Model, DataTypes } = require('sequelize')
const sequelize = require('./database')

class User extends Model {}

User.init({
   rating: {
      type: DataTypes.INTEGER
   },
   text: {
      type: DataTypes.STRING
   }
}, {
   sequelize, 
   mondelName: 'user'
})

module.exports = User