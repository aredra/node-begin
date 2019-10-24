const models = require('../models.js');

module.exports = () => {
   return models.sequelize.sync({force: true});
}
