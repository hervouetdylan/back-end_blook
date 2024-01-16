// models/user.js
const db = require('../config/database');

const User = {
  getAll: async () => {
    try {
      const [rows] = await db.query('SELECT * FROM users');
      return rows;
    } catch (error) {
      console.error('Error fetching all users:', error.message);
      throw error;
    }
  },
  // On fait un test et si jamais ça marche on ajoute d'autres méthodes
};

module.exports = User;
