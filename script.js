// ===== CONFIGURATION API =====
const API_KEY = 'bb493abc3be431fe458884ed5a10aa17'; // Clé API OpenWeather
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';
const ICON_BASE_URL = 'https://openweathermap.org/img/wn';

// ===== VARIABLES GLOBALES =====
let currentCity = '';
let lastSearchQuery = '';

// ===== ÉLÉMENTS DOM =====
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const retryBtn = document.getElementById('retryBtn');

// États d'affichage
const initialState = document.getElementById('initialState');
const loadingState = document.getElementById('loadingState');
const errorState = document.getElementById('errorState');
const weatherDisplay = document.getElementById('weatherDisplay');

// Éléments d'erreur
const errorTitle = document.getElementById('errorTitle');
const errorMessage = document.getElementById('errorMessage');

// Éléments d'affichage météo
const cityName = document.getElementById('cityName');
const country = document.getElementById('country');
const weatherIcon = document.getElementById('weatherIcon');
const currentTemp = document.getElementById('currentTemp');
const weatherDesc = document.getElementById('weatherDesc');
const feelsLike = document.getElementById('feelsLike');
const windSpeed = document.getElementById('windSpeed');
const humidity = document.getElementById('humidity');
const visibility = document.getElementById('visibility');
const pressure = document.getElementById('pressure');
const lastUpdate = document.getElementById('lastUpdate');

// Boutons ville exemple
const cityExamples = document.querySelectorAll('.city-example');

// ===== FONCTIONS UTILITAIRES =====

/**
 * Affiche un état spécifique de l'interface
 * @param {string} state - 'initial', 'loading', 'error', 'weather'
 */
function showState(state) {
    // Masquer tous les états
    initialState.classList.add('hidden');
    loadingState.classList.add('hidden');
    errorState.classList.add('hidden');
    weatherDisplay.classList.add('hidden');
    
    // Afficher l'état demandé
    switch (state) {
        case 'initial':
            initialState.classList.remove('hidden');
            break;
        case 'loading':
            loadingState.classList.remove('hidden');
            break;
        case 'error':
            errorState.classList.remove('hidden');
            break;
        case 'weather':
            weatherDisplay.classList.remove('hidden');
            break;
    }
}

/**
 * Valide la clé API
 * @returns {boolean} - True si la clé semble valide
 */
function isValidApiKey() {
    return API_KEY && API_KEY !== 'YOUR_API_KEY_HERE' && API_KEY.length > 10;
}

/**
 * Convertit les m/s en km/h
 * @param {number} ms - Vitesse en m/s
 * @returns {number} - Vitesse en km/h
 */
function msToKmh(ms) {
    return Math.round(ms * 3.6);
}

/**
 * Convertit les mètres en kilomètres
 * @param {number} meters - Distance en mètres
 * @returns {number} - Distance en km
 */
function metersToKm(meters) {
    return Math.round(meters / 1000);
}

/**
 * Capitalise la première lettre de chaque mot
 * @param {string} str - Chaîne à capitaliser
 * @returns {string} - Chaîne capitalisée
 */
function capitalizeWords(str) {
    return str.replace(/\b\w/g, letter => letter.toUpperCase());
}

/**
 * Formate la date de mise à jour
 * @returns {string} - Date formatée
 */
function getCurrentTimeString() {
    return new Date().toLocaleString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// ===== FONCTIONS API =====

/**
 * Effectue une requête à l'API OpenWeather
 * @param {string} city - Nom de la ville
 * @returns {Promise} - Promesse avec les données météo
 */
async function fetchWeatherData(city) {
    if (!isValidApiKey()) {
        throw new Error('Clé API manquante ou invalide');
    }
    
    const url = `${API_BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=fr`;
    
    console.log('🌐 Requête API météo pour:', city);
    
    const response = await fetch(url);
    
    if (!response.ok) {
        switch (response.status) {
            case 404:
                throw new Error('Ville non trouvée. Vérifiez l\'orthographe.');
            case 401:
                throw new Error('Clé API invalide ou expirée.');
            case 429:
                throw new Error('Trop de requêtes. Veuillez patienter un moment.');
            case 500:
                throw new Error('Erreur serveur. Réessayez plus tard.');
            default:
                throw new Error(`Erreur API (${response.status})`);
        }
    }
    
    const data = await response.json();
    console.log('✅ Données météo reçues:', data);
    return data;
}

/**
 * Met à jour l'affichage avec les données météo
 * @param {Object} data - Données météo de l'API
 */
function updateWeatherDisplay(data) {
    try {
        // Informations de base
        cityName.textContent = data.name;
        country.textContent = data.sys.country;
        
        // Température
        currentTemp.textContent = Math.round(data.main.temp);
        feelsLike.querySelector('span').textContent = Math.round(data.main.feels_like);
        
        // Description météo
        weatherDesc.textContent = capitalizeWords(data.weather[0].description);
        
        // Icône météo
        const iconCode = data.weather[0].icon;
        weatherIcon.src = `${ICON_BASE_URL}/${iconCode}@2x.png`;
        weatherIcon.alt = data.weather[0].description;
        
        // Détails
        windSpeed.textContent = `${msToKmh(data.wind.speed)} km/h`;
        humidity.textContent = `${data.main.humidity}%`;
        visibility.textContent = data.visibility ? `${metersToKm(data.visibility)} km` : 'N/A';
        pressure.textContent = `${data.main.pressure} hPa`;
        
        // Heure de mise à jour
        lastUpdate.querySelector('span').textContent = getCurrentTimeString();
        
        // Afficher l'état météo
        showState('weather');
        
        console.log('✅ Affichage météo mis à jour');
        
    } catch (error) {
        console.error('❌ Erreur lors de la mise à jour de l\'affichage:', error);
        showError('Erreur d\'affichage', 'Impossible d\'afficher les données météo.');
    }
}

/**
 * Affiche une erreur à l'utilisateur
 * @param {string} title - Titre de l'erreur
 * @param {string} message - Message d'erreur
 */
function showError(title, message) {
    errorTitle.textContent = title;
    errorMessage.textContent = message;
    showState('error');
}

/**
 * Recherche la météo d'une ville
 * @param {string} city - Nom de la ville à rechercher
 */
async function searchWeather(city) {
    if (!city.trim()) {
        showError('Champ vide', 'Veuillez entrer le nom d\'une ville.');
        return;
    }
    
    // Vérifier la clé API avant de faire la requête
    if (!isValidApiKey()) {
        showError('Configuration manquante', 'La clé API n\'est pas configurée. Consultez la documentation.');
        return;
    }
    
    currentCity = city.trim();
    lastSearchQuery = currentCity;
    
    // Afficher l'état de chargement
    showState('loading');
    
    try {
        const data = await fetchWeatherData(currentCity);
        updateWeatherDisplay(data);
        
        // Vider le champ de recherche après succès
        cityInput.value = '';
        
    } catch (error) {
        console.error('❌ Erreur lors de la recherche météo:', error);
        
        // Gestion des erreurs spécifiques
        if (error.message.includes('Clé API')) {
            showError('Problème de configuration', error.message);
        } else if (error.message.includes('Ville non trouvée')) {
            showError('Ville introuvable', `"${currentCity}" n'a pas été trouvée. Vérifiez l'orthographe.`);
        } else if (error.name === 'TypeError' || error.message.includes('Failed to fetch')) {
            showError('Problème de connexion', 'Vérifiez votre connexion internet et réessayez.');
        } else {
            showError('Erreur', error.message);
        }
    }
}

// ===== GESTIONNAIRES D'ÉVÉNEMENTS =====

/**
 * Initialise tous les gestionnaires d'événements
 */
function initEventListeners() {
    // Recherche par clic sur le bouton
    searchBtn.addEventListener('click', () => {
        searchWeather(cityInput.value);
    });
    
    // Recherche par pression sur Entrée
    cityInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchWeather(cityInput.value);
        }
    });
    
    // Bouton de retry
    retryBtn.addEventListener('click', () => {
        if (lastSearchQuery) {
            searchWeather(lastSearchQuery);
        } else {
            showState('initial');
        }
    });
    
    // Boutons d'exemple de villes
    cityExamples.forEach(btn => {
        btn.addEventListener('click', () => {
            const city = btn.dataset.city;
            cityInput.value = city;
            searchWeather(city);
        });
    });
    
    // Focus automatique sur l'input
    cityInput.focus();
}

// ===== INITIALISATION =====

/**
 * Initialise l'application
 */
function initApp() {
    console.log('🌤️ Initialisation de l\'application météo...');
    
    // Vérifier la configuration
    if (!isValidApiKey()) {
        console.warn('⚠️ Clé API non configurée - fonctionnalités limitées');
    }
    
    // Initialiser les événements
    initEventListeners();
    
    // Afficher l'état initial
    showState('initial');
    
    console.log('✅ Application météo initialisée');
}

// ===== DÉMARRAGE DE L'APPLICATION =====

// Démarrer l'application quand le DOM est chargé
document.addEventListener('DOMContentLoaded', initApp);

// ===== FONCTIONS DE DEBUG =====

// Rendre certaines fonctions disponibles globalement pour le debug
window.debugWeatherApp = {
    searchWeather: (city) => searchWeather(city),
    showState: (state) => showState(state),
    isValidApiKey: () => isValidApiKey(),
    getCurrentCity: () => currentCity
};
