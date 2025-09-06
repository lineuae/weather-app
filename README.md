# 🌤️ Tableau de Bord Météo

[![Voir la démo](https://img.shields.io/badge/🌤️_Voir_la_démo-blue?style=for-the-badge)](https://weather-app-09ct.onrender.com)

> Application web de consultation météo utilisant l'API OpenWeather  
> Développé par Lamine

## 📋 Description du projet

Mini-application météo utilisant l'API OpenWeather. **Objectif** : apprendre à faire des requêtes HTTP, traiter des données JSON et améliorer l'expérience utilisateur.

Cette application permet de consulter la météo actuelle de n'importe quelle ville dans le monde avec des informations détaillées et une interface moderne.

## ✨ Fonctionnalités

### Fonctionnalités principales
- 🔍 **Recherche par ville** : Entrez le nom d'une ville pour obtenir sa météo
- 🌡️ **Données météo complètes** : Température, ressenti, description, icône
- 📊 **Informations détaillées** : Vent, humidité, pression, visibilité
- ⚠️ **Gestion d'erreurs** : Messages d'erreur clairs et bouton de retry
- ⏳ **Indicateur de chargement** : Animation pendant la requête API
- 🎯 **Villes d'exemple** : Boutons rapides pour tester l'application

### Fonctionnalités techniques
- 📱 **Design responsive** : S'adapte parfaitement aux mobiles
- 🔄 **Requêtes HTTP asynchrones** : Utilisation de fetch() et async/await
- 🛡️ **Gestion d'erreurs robuste** : Différents types d'erreurs gérés spécifiquement
- 🎨 **Interface moderne** : Design épuré avec animations CSS
- 🌐 **API REST** : Intégration avec l'API OpenWeatherMap

## 🛠️ Technologies utilisées

- **HTML5** : Structure sémantique et accessible
- **CSS3** : Design moderne avec animations et responsive design
- **JavaScript (ES6+)** : Logique métier, requêtes API et manipulation du DOM
- **OpenWeather API** : Service externe de données météorologiques
- **Fetch API** : Pour les requêtes HTTP
- **JSON** : Format d'échange de données avec l'API

*Choix technologique* : J'ai utilisé JavaScript vanilla avec les APIs modernes (fetch, async/await) pour comprendre les fondamentaux des requêtes HTTP avant d'utiliser des librairies.

## 🚀 Installation et utilisation

### Prérequis
1. **Clé API OpenWeather gratuite** :
   - Créer un compte sur [openweathermap.org](https://openweathermap.org/)
   - Récupérer votre clé API dans "My API Keys"

### Installation
1. **Cloner ou télécharger** le projet
2. **Configurer la clé API** :
   ```javascript
   // Dans script.js, ligne 2
   const API_KEY = 'VOTRE_CLE_API_ICI';
   ```
3. **Ouvrir `index.html`** dans un navigateur moderne

### Utilisation
1. **Rechercher une ville** : Tapez le nom et appuyez sur Entrée ou cliquez sur "Rechercher"
2. **Utiliser les exemples** : Cliquez sur les boutons Paris, Montréal, Québec, Lévis
3. **Voir les détails** : L'application affiche température, vent, humidité, etc.
4. **Gérer les erreurs** : En cas d'erreur, utilisez le bouton "Réessayer"

## 🏗️ Structure du projet

```
weather-app/
├── index.html          # Page principale HTML
├── style.css           # Feuilles de style CSS
├── script.js           # Logique JavaScript et API
├── README.md           # Documentation du projet
├── package.json        # Configuration npm
├── render.yaml         # Configuration Render
└── DEPLOYMENT.md       # Guide de déploiement
```

## 💡 Ce que j'ai appris

En développant cette application météo, j'ai pu découvrir et maîtriser :

### Concepts techniques développés
- **Requêtes HTTP** : Utilisation de fetch() pour appeler une API REST
- **Asynchrone JavaScript** : Gestion des promesses avec async/await
- **Traitement JSON** : Parsing et manipulation des données de l'API
- **Gestion d'erreurs** : Try/catch et différents codes d'erreur HTTP
- **États d'interface** : Loading, error, success states
- **API externe** : Intégration avec un service tiers (OpenWeather)

### Défis rencontrés et solutions
- **Gestion des erreurs API** : J'ai appris à gérer différents codes d'erreur (404, 401, 429, 500) avec des messages spécifiques
- **États de chargement** : Implémentation d'un système d'états pour une meilleure UX
- **Données manquantes** : Gestion des cas où certaines données météo ne sont pas disponibles
- **Formatage des données** : Conversion des unités (m/s vers km/h, mètres vers km)

### Compétences UX/UI
- **Feedback utilisateur** : Messages d'erreur clairs et informatifs
- **Responsive design** : Adaptation parfaite mobile/desktop
- **Animations** : Transitions fluides et spinner de chargement
- **Accessibilité** : Structure HTML sémantique et navigation au clavier

## 🔄 Améliorations possibles

Cette application étant un exercice d'apprentissage, plusieurs améliorations pourraient être envisagées :

### À court terme
- 📅 **Prévisions 5 jours** : Utiliser l'endpoint forecast de l'API
- 📍 **Géolocalisation** : Détecter automatiquement la position de l'utilisateur
- 💾 **Historique de recherche** : Sauvegarder les dernières villes consultées
- 🎨 **Thèmes météo** : Changer la couleur selon la météo (soleil = jaune, pluie = bleu)

### À long terme
- 🗺️ **Carte interactive** : Intégrer une carte avec données météo
- 📈 **Graphiques** : Visualisation des tendances météorologiques
- 🔔 **Alertes météo** : Notifications pour conditions météo particulières
- 🌍 **Multi-langues** : Support de plusieurs langues

## 🎯 Objectifs pédagogiques atteints

Ce projet démontre :

- **Intégration d'API** : Capacité à consommer un service web externe
- **JavaScript moderne** : Utilisation des fonctionnalités ES6+ (async/await, fetch)
- **Gestion d'erreurs** : Approche robuste de la gestion des cas d'erreur
- **Expérience utilisateur** : Conception d'interface intuitive et responsive
- **Code structuré** : Organisation claire et commentée du code

## 📝 Notes

En tant que débutant, j'ai privilégié :

- **Compréhension des APIs** : Utilisation de JavaScript vanilla pour comprendre les requêtes HTTP
- **Gestion d'erreurs complète** : Anticipation de différents types d'erreurs possibles
- **UX avant tout** : Messages clairs et états visuels pour guider l'utilisateur
- **Code lisible** : Commentaires détaillés et structure logique
- **Apprentissage progressif** : Maîtrise des concepts de base avant l'optimisation

Cette application m'a permis de comprendre concrètement comment les applications web communiquent avec des services externes !

---

**Développé avec 🌤️ par Lamine**
