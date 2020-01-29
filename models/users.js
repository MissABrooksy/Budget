module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {

      clientLastname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      clientFirstname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return User;
    };
    
    
  
