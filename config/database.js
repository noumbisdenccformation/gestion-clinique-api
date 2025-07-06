const { Sequelize } = require('sequelize');
require('dotenv').config();

// Configuration de la base de données
const sequelize = new Sequelize(
  process.env.DATABASE_URL || {
    database: process.env.DB_NAME || 'gestion_clinique',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

// Test de connexion
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connexion à la base de données réussie');
  } catch (error) {
    console.error('❌ Erreur de connexion à la base de données:', error);
  }
};

// Synchronisation des modèles
const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('✅ Synchronisation des modèles réussie');
  } catch (error) {
    console.error('❌ Erreur de synchronisation:', error);
  }
};

module.exports = {
  sequelize,
  testConnection,
  syncDatabase
};