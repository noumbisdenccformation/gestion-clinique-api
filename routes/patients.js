const express = require('express');
const router = express.Router();

// Routes temporaires pour les patients
router.get('/', (req, res) => {
  res.json({ 
    message: 'Route patients - En développement',
    endpoints: [
      'GET /api/patients - Liste des patients',
      'POST /api/patients - Créer patient',
      'GET /api/patients/:id - Détails patient',
      'PUT /api/patients/:id - Modifier patient',
      'DELETE /api/patients/:id - Supprimer patient'
    ]
  });
});

module.exports = router;