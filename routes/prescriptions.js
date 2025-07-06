const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ 
    message: 'Route prescriptions - En développement',
    endpoints: [
      'GET /api/prescriptions - Liste des prescriptions',
      'POST /api/prescriptions - Créer prescription',
      'GET /api/prescriptions/:id - Détails prescription',
      'PUT /api/prescriptions/:id - Modifier prescription',
      'DELETE /api/prescriptions/:id - Supprimer prescription'
    ]
  });
});

module.exports = router;