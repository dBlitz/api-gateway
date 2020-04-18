	var Sequelize = require('sequelize');
	const models = require('./database/models')

	var sequelize = new Sequelize('dev_db', 'postgres', 'abcd1234', {
	  host: 'localhost',
	  dialect: 'postgres'
	});

		sequelize
		  .authenticate()
		  .then(() => {
		    console.log('Connection has been established successfully.');

		  })
		  .catch(err => {
		    console.error('Unable to connect to the database:', err);
		  });

  var User = sequelize.import('./database/models/user.js');    


// var Model = Sequelize.Model;
// class User extends Model {}
// User.init({
//   // attributes
//   firstName: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: Sequelize.STRING
//     // allowNull defaults to true
//   }
// }, {
//   sequelize,
//   modelName: 'user'
//   // options
// });

// Note: using `force: true` will drop the table if it already exists
 User.sync({ force: false }).then(() => {
  // Now the `users` table in the database corresponds to the model definition
  return User.create({
    firstName: 'John11',
    lastName: 'Hancock11'
  });
});




// Find all users
 User.findAll()  .then(users => {
  const response = JSON.stringify(users, null, 4);

  console.log(JSON.parse(response))

  // console.log("All users:", JSON.parse(response)[0]);

  // console.log("All users:", response[0]["firstName"]);
});


