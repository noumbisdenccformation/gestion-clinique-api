const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ 
    message: 'Route factures - En développement',
    endpoints: [
      'GET /api/invoices - Liste des factures',
      'POST /api/invoices - Créer facture',
      'GET /api/invoices/:id - Détails facture',
      'PUT /api/invoices/:id - Modifier facture',
      'DELETE /api/invoices/:id - Supprimer facture'
    ]
  });
});

module.exports = router;