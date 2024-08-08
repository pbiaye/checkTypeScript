// Définition de l'interface Véhicule
interface Véhicule {
    // Propriété pour le fabricant (faire) du véhicule
    faire: string;
    // Propriété pour le modèle du véhicule
    modèle: string;
    // Propriété pour l'année du véhicule
    année: number;
    
    // Méthode pour démarrer le véhicule, renvoie void et affiche un message dans la console
    démarrer(): void;
  }
  
  // Implémentation de la classe Car qui utilise l'interface Véhicule
  class Car implements Véhicule {
    // Déclaration des propriétés conformément à l'interface Véhicule
    faire: string;
    modèle: string;
    année: number;
  
    // Constructeur pour initialiser les propriétés de la voiture
    constructor(faire: string, modèle: string, année: number) {
      this.faire = faire;
      this.modèle = modèle;
      this.année = année;
    }
  
    // Implémentation de la méthode démarrer
    démarrer(): void {
      // Affichage du message spécifique pour les voitures
      console.log("Le moteur de la voiture a démarré");
    }
  }
  
  // Création d'une instance de la classe Car avec des valeurs pour faire, modèle, et année
  const maVoiture = new Car("Toyota", "Corolla", 2020);
  
  // Appel de la méthode démarrer pour vérifier le fonctionnement
  maVoiture.démarrer();
  
  // Compilation et exécution du code TypeScript en JavaScript
  