// Import des composants nécessaires
import CareScale from './CareScale';
import '../styles/PlantItem.css';

 function handleClick(e) {
    console.log('✨ Ceci est mon event :', e)
}
// Déclaration du composant React PlantItem
function PlantItem({ id, cover, name, water, light }) {
  // dans cette partie, tu mets ton JS propre à ce composant (qui ne sera pas réutilisé ailleurs que dans ce composant, entre la déclaration et le rendu JSX)

  // Fonction gestionnaire de clic
 
  // Rendu JSX du composant
  return (
    // ici, l'attribut onClick de React est l'équivalent d'un AddEventListener sur ton élément, ici lorsque l'on clique dessus, la fonction handleClick est lancée
    <li className="lmj-plant-item" onClick= {() => handleClick(name)}>
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}

// Export du composant par défaut
export default PlantItem;
