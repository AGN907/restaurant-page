import BurgerOne from '../images/burgerOne.png';
import BurgerTwo from '../images/burgerTwo.png';
import BurgerThree from '../images/burgerThree.png';

const menuRecipes = [
  {
    title: 'Cheddar BLT Burgers with Tarragon Russian Dressing',
    desc: "Chef Laurent Tourondel brushes burgers with butter while they're on the grill. The natural sugars caramelize, making the meat on these BLT burgers extra-delicious.",
    price: 12,
    image: BurgerOne,
  },
  {
    title: 'Minetta Burger',
    desc: "Minetta Tavern in New York City is known for its spectacular hamburgers. The restaurant's namesake burger is topped with cheddar and caramelized onions — for the full experience, serve with pommes frites.",
    price: 10,
    image: BurgerTwo,
  },
  {
    title: 'Nacho Burger',
    desc: 'These next-level burgers from Bobby Flay are topped with gooey cheese, salsa, and tortilla chips. Pair them with a bold, berry-rich Zinfandel.',
    price: 13,
    image: BurgerThree,
  },
];

export default function Menu() {
  const sectionName = document.createElement('h1')
  sectionName.textContent = 'Menu';

  const sectionGrid = document.createElement('div')
  sectionGrid.className = 'content-grid';

  menuRecipes.forEach(recipe => {
    const menuItem = document.createElement('div')
    menuItem.className = 'menu-item';

    const menuItemTitle = document.createElement('h3')
    menuItemTitle.className = 'menu-item-title';
    menuItemTitle.textContent = recipe.title;

    const menuItemDesc = document.createElement('p')
    menuItemDesc.className = 'menu-item-desc';
    menuItemDesc.textContent = recipe.desc;

    const menuItemPrice = document.createElement('p')
    menuItemPrice.classList = 'menu-item-price';
    menuItemPrice.textContent = `$${recipe.price}`;

    const menuItemImage = document.createElement('img')
    menuItemImage.className = 'menu-item-image';
    menuItemImage.src = recipe.image;

    menuItem.append(menuItemTitle);
    menuItem.append(menuItemDesc);
    menuItem.append(menuItemPrice);
    menuItem.append(menuItemImage);

    sectionGrid.append(menuItem);
  });

  return {
    sectionName,
    sectionGrid,
  };
}
