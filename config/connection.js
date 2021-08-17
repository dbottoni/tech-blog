const Sequelize = require('sequelize');

const sequelize = new Sequelize('tech_news_blog', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;