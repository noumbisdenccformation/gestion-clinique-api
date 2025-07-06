const express = require('express');
const router = express.Router();

// Route temporaire pour les utilisateurs
router.get('/', (req, res) => {
  res.json({ 
    message: 'Route utilisateurs - En développement',
    endpoints: [
      'GET /api/users - Liste des utilisateurs',
      'GET /api/users/:id - Détails utilisateur',
      'PUT /api/users/:id - Modifier utilisateur',
      'DELETE /api/users/:id - Supprimer utilisateur'
    ]
  });
});

module.exports = router;