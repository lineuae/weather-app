# 🚀 Guide de déploiement sur Render

## Configuration API importante

⚠️ **IMPORTANT** : Avant le déploiement, vous devez configurer votre clé API OpenWeather dans `script.js` :

```javascript
// Ligne 2 de script.js
const API_KEY = 'VOTRE_CLE_API_ICI';
```

## Étapes pour déployer sur Render

### 1. Préparer le repository GitHub
1. Créer un nouveau repository sur GitHub : `weather-app`
2. **Configurer la clé API** dans le code avant de pousser
3. Uploader tous les fichiers du projet
4. Faire un commit initial

### 2. Déployer sur Render
1. Se connecter sur [render.com](https://render.com)
2. Cliquer sur "New +" → "Static Site"
3. Connecter votre repository GitHub
4. Configurer le déploiement :
   - **Name** : `weather-app-lamine` (ou autre nom de votre choix)
   - **Branch** : `main`
   - **Root Directory** : (laisser vide)
   - **Build Command** : (laisser vide)
   - **Publish Directory** : `.` (point pour indiquer la racine)

### 3. Configuration automatique
Le fichier `render.yaml` configure automatiquement :
- Le type de service (site statique)
- Les redirections nécessaires
- Le nom du service

### 4. URL finale
Une fois déployé, l'application sera accessible à une URL du type :
`https://[nom-choisi].onrender.com`

## Vérifications avant déploiement

✅ **Clé API configurée** : Remplacer `YOUR_API_KEY_HERE` par votre vraie clé
✅ Tous les fichiers sont présents :
- `index.html`
- `style.css`
- `script.js`
- `README.md`
- `package.json`
- `render.yaml`

✅ L'application fonctionne localement avec la clé API
✅ Pas de liens externes cassés
✅ Design responsive testé

## Test local avant déploiement

1. **Configurer la clé API** dans `script.js`
2. **Ouvrir `index.html`** dans le navigateur
3. **Tester une recherche** (ex: "Paris")
4. **Vérifier** que les données s'affichent correctement

## Notes importantes

- **Render gratuit** : Le site peut se mettre en veille après inactivité
- **HTTPS automatique** : Render fournit automatiquement un certificat SSL
- **Déploiement automatique** : Chaque push sur GitHub redéploie automatiquement
- **Clé API publique** : ⚠️ La clé sera visible dans le code source (normal pour les clés publiques OpenWeather)

## Dépannage

Si l'application ne fonctionne pas après déploiement :

### Problèmes API
- ✅ **Vérifier** que la clé API est bien configurée dans `script.js`
- ✅ **Tester** la clé API localement avant le déploiement
- ✅ **Attendre** jusqu'à 2h pour l'activation de nouvelles clés API

### Problèmes de déploiement
- ✅ Vérifier que tous les fichiers sont bien poussés sur GitHub
- ✅ S'assurer qu'`index.html` est à la racine du projet
- ✅ Consulter les logs de déploiement sur Render

### Messages d'erreur courants
- **"Configuration manquante"** : Clé API non configurée
- **"Clé API invalide"** : Clé incorrecte ou pas encore active
- **"Ville non trouvée"** : Problème de saisie de la ville (normal)
- **"Problème de connexion"** : Vérifier la connexion internet
