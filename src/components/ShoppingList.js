import { plantList } from '../datas/PlantList';
import PlantItem from './PlantItem';
import '../styles/ShoppingList.css';

function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light }) => (
          <PlantItem
            // Ajout de cette ligne afin de garantir que chaque élément généré a une clé unique (permet de gérer les mises à jour efficacement et éviter les doublons, la key indique à React que c'est l'attribut unique qui permet de différencier les items entre eux, ici ta clé unique = l'id, mais react peut pas le deviner)
            key={id}
            id={id}
            cover={cover}
            name={name}
            water={water}
            light={light}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
