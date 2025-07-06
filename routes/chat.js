const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ 
    message: 'Route chat - En développement',
    endpoints: [
      'GET /api/chat/conversations - Liste des conversations',
      'POST /api/chat/messages - Envoyer message',
      'GET /api/chat/messages/:conversationId - Messages d\'une conversation'
    ]
  });
});

module.exports = router;