const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ 
    message: 'Route rendez-vous - En développement',
    endpoints: [
      'GET /api/appointments - Liste des RDV',
      'POST /api/appointments - Créer RDV',
      'GET /api/appointments/:id - Détails RDV',
      'PUT /api/appointments/:id - Modifier RDV',
      'DELETE /api/appointments/:id - Supprimer RDV'
    ]
  });
});

module.exports = router;