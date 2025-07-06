# 🏥 Gestion Clinique - API Backend

API REST pour la gestion d'une clinique médicale développée avec Node.js, Express et PostgreSQL.

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+
- PostgreSQL
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone <repository-url>
cd gestion-clinique-api

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env
# Modifier les valeurs dans .env

# Démarrer en développement
npm run dev

# Démarrer en production
npm start
```

## 📡 Endpoints API

### 🔐 Authentification
- `POST /api/auth/login` - Connexion
- `POST /api/auth/register` - Inscription
- `GET /api/auth/me` - Profil utilisateur
- `POST /api/auth/logout` - Déconnexion

### 👥 Utilisateurs
- `GET /api/users` - Liste des utilisateurs
- `GET /api/users/:id` - Détails utilisateur
- `PUT /api/users/:id` - Modifier utilisateur
- `DELETE /api/users/:id` - Supprimer utilisateur

### 🏥 Patients
- `GET /api/patients` - Liste des patients
- `POST /api/patients` - Créer patient
- `GET /api/patients/:id` - Détails patient
- `PUT /api/patients/:id` - Modifier patient
- `DELETE /api/patients/:id` - Supprimer patient

### 📅 Rendez-vous
- `GET /api/appointments` - Liste des RDV
- `POST /api/appointments` - Créer RDV
- `GET /api/appointments/:id` - Détails RDV
- `PUT /api/appointments/:id` - Modifier RDV
- `DELETE /api/appointments/:id` - Supprimer RDV

### 💊 Prescriptions
- `GET /api/prescriptions` - Liste des prescriptions
- `POST /api/prescriptions` - Créer prescription
- `GET /api/prescriptions/:id` - Détails prescription
- `PUT /api/prescriptions/:id` - Modifier prescription
- `DELETE /api/prescriptions/:id` - Supprimer prescription

### 🧾 Factures
- `GET /api/invoices` - Liste des factures
- `POST /api/invoices` - Créer facture
- `GET /api/invoices/:id` - Détails facture
- `PUT /api/invoices/:id` - Modifier facture
- `DELETE /api/invoices/:id` - Supprimer facture

### 💬 Chat
- `GET /api/chat/conversations` - Conversations
- `POST /api/chat/messages` - Envoyer message
- `GET /api/chat/messages/:id` - Messages

## 🛠️ Technologies

- **Framework**: Express.js
- **Base de données**: PostgreSQL + Sequelize ORM
- **Authentification**: JWT + Passport.js
- **Validation**: Express-validator
- **Sécurité**: Helmet, CORS, bcryptjs
- **Upload**: Multer
- **Email**: Nodemailer
- **PDF**: PDFKit
- **WebSocket**: Socket.io
- **Tests**: Jest + Supertest

## 🔧 Configuration

### Variables d'environnement (.env)
```env
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://user:pass@host:port/db
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=24h
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-password
FRONTEND_URL=https://your-frontend.vercel.app
```

## 🚀 Déploiement

### Railway (Recommandé)
1. Connecter le repository GitHub
2. Configurer les variables d'environnement
3. Déploiement automatique

### Render
1. Connecter le repository
2. Configurer les variables
3. Déployer

## 📊 Structure du Projet

```
gestion-clinique-api/
├── config/          # Configuration (DB, etc.)
├── controllers/     # Logique métier
├── middleware/      # Middlewares personnalisés
├── models/          # Modèles Sequelize
├── routes/          # Routes Express
├── utils/           # Utilitaires
├── uploads/         # Fichiers uploadés
├── tests/           # Tests
├── server.js        # Point d'entrée
└── package.json     # Dépendances
```

## 🧪 Tests

```bash
# Lancer les tests
npm test

# Tests avec couverture
npm run test:coverage

# Tests en mode watch
npm run test:watch
```

## 📝 Licence

MIT License - voir le fichier LICENSE pour plus de détails.

---

**🏥 API Gestion Clinique - Version 1.0.0**