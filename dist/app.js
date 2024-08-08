// Implémentation de la classe Car qui utilise l'interface Véhicule
var Car = /** @class */ (function () {
    // Constructeur pour initialiser les propriétés de la voiture
    function Car(faire, modèle, année) {
        this.faire = faire;
        this.modèle = modèle;
        this.année = année;
    }
    // Implémentation de la méthode démarrer
    Car.prototype.démarrer = function () {
        // Affichage du message spécifique pour les voitures
        console.log("Le moteur de la voiture a démarré");
    };
    return Car;
}());
// Création d'une instance de la classe Car avec des valeurs pour faire, modèle, et année
var maVoiture = new Car("Toyota", "Corolla", 2020);
// Appel de la méthode démarrer pour vérifier le fonctionnement
maVoiture.démarrer();
// Compilation et exécution du code TypeScript en JavaScript
