// https://medium.com/@jgrisafe/custom-user-authentication-with-express-sequelize-and-bcrypt-667c4c0edef5
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
var secret_key = require('../config/auth/secret_key').SECRET_KEY.toString();

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    email_address: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    mine_id: DataTypes.INTEGER,
    org_id_fk: DataTypes.ARRAY(DataTypes.INTEGER),
    role: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {  tableName: 'Users', });

  User.associate = models => {
    // User.belongsTo(models.Organization, { foreignKey: 'id' });
  }

  User.authenticate = async function(email_address, password) {
    const user = await User.findOne({ where: { email_address: email_address } });
    if (bcrypt.compareSync(password, user.password)) { 
     var token = jwt.sign({ user: user.dataValues.id }, secret_key);
     return token;

   }
   throw new Error('invalid password');
 }

//https://www.oauth.com/oauth2-servers/access-tokens/access-token-response/
//https://www.oauth.com/oauth2-servers/authorization/the-authorization-response/
// https://www.grizzlypeaksoftware.com/articles?id=6G3prVhXnUeSYUEqEoCqq2
User.authorize = async function(token) {

  jwt.verify(token, secret_key, function(err, decoded) {
    if ( err ) {
      throw new Error('invalid Authorization');
    }
    else {
      return decoded;
    }

  });


}

User.setPassword = async function(password, done) {
  console.log("password is here " + password)
  return  bcrypt.hash(password, bcrypt.genSaltSync(10));
}

return User; 

};